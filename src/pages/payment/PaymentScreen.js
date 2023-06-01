import OneUpi from 'one-react-native-upi';
import SPButton from '../../components/SPButton/SPButton';
import SPText from '../../theme/SPText';
import SPCard from '../../theme/SPCard';
import {SPColors, SPSpacing} from '../../theme/SPTheme';
import SPInput from '../../components/SPInput';
import {useState} from 'react';
import SPSpacer from '../../theme/SPSpacer';
import {TouchableOpacity} from 'react-native';

const data = [
  {
    value: '1',
  },
  {
    value: '500',
  },
  {
    value: '1000',
  },
  {
    value: '1500',
  },

  {
    value: '2000',
  },
  {
    value: '5000',
  },
];

const onSuccess = success => {
  console.log({success});
};
const onFailure = error => {
  console.log({error});
};

function PaymentScreen({route}) {
  const [amount, setAmount] = useState('1');
  const [note, setNote] = useState('Test payment');

  const upiDeepLink = route?.params?.e?.data;

  const upiId = upiDeepLink.split('=')[1]?.split('&')[0];

  if (!upiId) {
    alert('Parse error');
  }

  const config = {
    upiId,
    name: 'Test',
    note,
    amount,
    // transactionRef: Math.floor(Math.random() * 1000) + new Date(),
    // targetPackage: "in.org.npci.upiapp", //com.awesomeproject
  };

  // paytmqr28100505010114ewa6fa6qz8@paytm

  console.log(config);

  const payNowHandler = () => {
    
    // OneUpi.initiate(config, onSuccess, onFailure);
  };

  return (
    <SPCard
      cardStyle={{
        backgroundColor: SPColors.smokeWhite,
        flex: 1,
      }}>
      <SPCard
        cardStyle={{
          padding: 20,
        }}>
        <SPInput
          keyboardType="numeric"
          text={amount}
          onChangeText={e => setAmount(e)}
          placeholder="Enter points"
        />

        <SPInput
          text={note}
          onChangeText={e => setNote(e)}
          placeholder="Enter your short note here"
        />

        <SPCard row spaceBetween flexWrap="wrap">
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setAmount(item.value)}>
                <SPCard
                  cardStyle={{
                    width: 100,
                    backgroundColor: SPColors.greenSOL,
                    padding: 10,
                    borderRadius: 4,
                  }}
                  mTop={20}
                  center>
                  <SPText fontSize={18} fontWeight="700" color={SPColors.white}>
                    {item.value}
                  </SPText>
                </SPCard>
              </TouchableOpacity>
            );
          })}
        </SPCard>
      </SPCard>
      <SPSpacer height={SPSpacing.l} />
      <SPCard center>
        <SPButton onPress={() => payNowHandler()}>
          <SPText fontWeight="700" color={SPColors.white}>
            PAY NOW
          </SPText>
        </SPButton>
      </SPCard>
    </SPCard>
  );
}

export default PaymentScreen;
