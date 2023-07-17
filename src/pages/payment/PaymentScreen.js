import OneUpi from 'one-react-native-upi';
import SPButton from '../../components/SPButton/SPButton';
import SPText from '../../theme/SPText';
import SPCard from '../../theme/SPCard';
import {SPColors, SPSpacing} from '../../theme/SPTheme';
import SPInput from '../../components/SPInput';
import {useEffect, useState} from 'react';
import SPSpacer from '../../theme/SPSpacer';
import {TouchableOpacity} from 'react-native';
import {LocalStorage} from '../../helpers/LocalStorage';
import {guidGenerator} from '../../utils/commonUtils';
import Button from '../../components/Button';
import {onDisplayNotification} from '../../utils/notifeeNotify';
import SPModalBottom from '../../components/modal/SPModalBottom';
// import {SetuUPIDeepLink} from '@setu/upi-deep-links';

// const upidl = SetuUPIDeepLink({
//   schemeID: 'c1c60e04-6596-429d-8e38-63e83dcf959f',
//   secret: '60ab7e2a-72cc-4e09-ab4e-c054ff44179b',
//   productInstanceID: '1172586336020858422',
//   mode: 'SANDBOX',
//   authType: 'JWT',
// });

function convertUPILink(inputLink) {
  // Regular expressions to extract values from the input link
  const paRegex = /pa=([^&]+)/;
  const pnRegex = /pn=([^&]+)/;
  const amRegex = /am=([^&]+)/;

  const paMatch = inputLink.match(paRegex);
  const pnMatch = inputLink.match(pnRegex);
  const amMatch = inputLink.match(amRegex);

  // Extracting the values from the matches
  const pa = paMatch ? paMatch[1] : '';
  const pn = pnMatch ? pnMatch[1] : '';
  const am = amMatch ? amMatch[1] : '';

  // Constructing the new UPI link
  const newLink = `upi://pay?pa=${pa}&pn=${pn}`;

  return newLink;
}

function PaymentScreen({route, navigation}) {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('Test payment');
  const [categoryId, setCategoryId] = useState('');
  const [catData, setCatData] = useState(null);

  let allCategory = LocalStorage.getString('categories')
    ? JSON.parse(LocalStorage.getString('categories'))
    : [];

  let paymentHistory = LocalStorage.getString('paymentHistory')
    ? JSON.parse(LocalStorage.getString('paymentHistory'))
    : [];

  const upiDeepLink = route?.params?.e?.data;
  const upiId = upiDeepLink?.split('=')[1]?.split('&')[0];
  const upiPayeee = upiDeepLink?.split('=')[2].split('&')[0];

  let config = {
    upiId,
    name: upiPayeee || 'Unknown',
    note,
    amount,
    transactionId: paymentHistory?.length + 1 + Date.now(),
    categoryId,
    // transactionRef: Math.floor(Math.random() * 1000) + new Date(),
    // targetPackage: "in.org.npci.upiapp", //com.awesomeproject
  };

  let updatedCategories = allCategory.filter(item => item.id === categoryId)[0];

  const [apps, setApps] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const paymentOptions = async () => {
    const res = await OneUpi.getInstalledApps();
    setApps(res);
  };

  useEffect(() => {
    paymentOptions();
  }, []);

  const payNowHandler = e => {
    if (
      parseInt(updatedCategories?.amount) > 0 &&
      parseInt(updatedCategories?.amount) > parseInt(amount)
    ) {
      const newUPI = convertUPILink(upiDeepLink);
      console.log(newUPI);
      OneUpi.initiate(
        `${newUPI}&am=${amount}`,
        {
          targetPackage: e.PackageName,
          chooserText: 'Pay with ',
        },
        onSuccess,
        onFailure,
      );
      // onUpdate();
    } else {
      if (updatedCategories) {
        alert('You are out of budget for selected category!');
      } else {
        alert('Please select a category');
      }
    }
  };

  const onSuccess = success => {
    console.log({success});
    setOpenModal(false)
    onUpdate();
  };

  const onFailure = error => {
    console.log({error});
    setOpenModal(false)
  };

  const onUpdate = () => {
    LocalStorage.set(
      'paymentHistory',
      JSON.stringify([...paymentHistory, config]),
    );

    updatedCategories.amount = (
      parseInt(updatedCategories.amount) - parseInt(amount)
    )?.toString();

    LocalStorage.set('categories', JSON.stringify(allCategory));

    let budgetByCategory = LocalStorage.getString('budgetByCategory')
      ? JSON.parse(LocalStorage.getString('budgetByCategory'))
      : [];

    let updateBudget = budgetByCategory.filter(
      item => item.id === categoryId,
    )[0];

    if (updateBudget) {
      updateBudget.amount = parseInt(updateBudget?.amount) + parseInt(amount);
    } else {
      budgetByCategory?.push({...catData, amount});
    }

    LocalStorage.set('budgetByCategory', JSON.stringify(budgetByCategory));

    setTimeout(() => {
      onDisplayNotification({
        title: `You invest ₹${amount} in ${catData?.title} category`,
        body: ` Debited from your ${catData?.title} category to this UPI ${upiId}`,
      });
      navigation.navigate('CoreNavigation');
    }, 100);
  };

  return (
    <SPCard
      cardStyle={{
        backgroundColor: SPColors.smokeWhite,
        flex: 1,
      }}>
      {openModal && (
        <SPModalBottom
          setOpenModal={setOpenModal}
          apps={apps}
          paymentHandler={payNowHandler}
        />
      )}

      <SPCard
        cardStyle={{
          padding: 20,
        }}>
        <SPInput
          keyboardType="numeric"
          text={amount}
          onChangeText={e => setAmount(e)}
          placeholder="Enter amount"
        />

        <SPInput
          text={note}
          onChangeText={e => setNote(e)}
          placeholder="Enter your short note here"
        />

        {allCategory?.length === 0 && (
          <Button
            mode="contained"
            style={{marginTop: 100}}
            onPress={() => navigation.navigate('AddCategory')}>
            Create New Category
          </Button>
        )}

        <SPCard row spaceBetween flexWrap="wrap">
          {allCategory.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  console.log(item);
                  setCategoryId(item.id);
                  setCatData(item);
                }}>
                <SPCard
                  cardStyle={{
                    // width: 100,
                    backgroundColor:
                      categoryId === item.id
                        ? SPColors.redText
                        : SPColors.greenSOL,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 4,
                  }}
                  mTop={20}
                  center>
                  <SPText fontSize={18} fontWeight="700" color={SPColors.white}>
                    {item.title}
                  </SPText>
                </SPCard>
              </TouchableOpacity>
            );
          })}
        </SPCard>
      </SPCard>
      <SPSpacer height={SPSpacing.l} />
      <SPCard center>
        <SPButton onPress={() => setOpenModal(true)}>
          <SPText fontWeight="700" color={SPColors.white}>
            PAY NOW
          </SPText>
        </SPButton>
      </SPCard>
    </SPCard>
  );
}

export default PaymentScreen;
