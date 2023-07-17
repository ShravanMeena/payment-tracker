import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SPCard from '../../theme/SPCard';
import {SPColors} from '../../theme/SPTheme';
import SPText from '../../theme/SPText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderButton from '../../components/HeaderButton';
import {LocalStorage} from '../../helpers/LocalStorage';
import Error from '../error/Error';
import {useIsFocused} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import CustomChart from './CustomChart';
// import SmsAndroid from 'react-native-get-sms-android';
import { BlurView } from "@react-native-community/blur";

const Item = ({item}) => (
  <SPCard mBottom={4}>
    <View style={styles.item}>
      <SPCard row spaceBetween>
        <SPCard row center>
          {/* <SPCard mRight={20}>
            <FontAwesome name="money" size={24} />
          </SPCard> */}
          <SPCard>
            <SPText fontSize={16} fontWeight="700">
              Payment to
            </SPText>
            <SPText
              style={{
                color: 'red',
              }}
              fontSize={16}>
              {item.name?.includes('%') ? item.name?.split('%')[0] : item.name}
            </SPText>
            <SPText
              style={{
                maxWidth: 180,
              }}
              fontSize={12}>
              {item.note}
            </SPText>
          </SPCard>
        </SPCard>

        <SPCard center>
          <SPText fontSize={24} color={SPColors.black}>
            ₹{item.amount}
          </SPText>
          {/* {title === 'Six Item' && (
            <SPText fontSize={12} color={SPColors.redText}>
              Falied
            </SPText>
          )} */}
        </SPCard>
      </SPCard>
    </View>
  </SPCard>
);

export default function History({navigation}) {
  const isFocused = useIsFocused();
  const [historyData, setHistoryData] = useState([]);
  const [selected, setSelected] = useState('');

  let allCategory = LocalStorage.getString('categories')
    ? JSON.parse(LocalStorage.getString('categories'))
    : [];

  let paymentHistory = LocalStorage.getString('paymentHistory')
    ? JSON.parse(LocalStorage.getString('paymentHistory'))
    : [];

  useEffect(() => {
    if (isFocused) {
      if (paymentHistory?.length === 0) {
        return;
      }
      setHistoryData(paymentHistory);
    }
  }, [isFocused]);

  const filterByCat = id => {
    let filteredData = paymentHistory.filter(item => item.categoryId === id);
    setHistoryData(filteredData);
    setSelected(id);
  };
  const allData = () => {
    /* List SMS messages matching the filter */
    // let filter = {
    //   box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    //   /**
    //    *  the next 3 filters can work together, they are AND-ed
    //    *
    //    *  minDate, maxDate filters work like this:
    //    *    - If and only if you set a maxDate, it's like executing this SQL query:
    //    *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
    //    *    - Same for minDate but with "date >= minDate"
    //    */
    //   // minDate: 1554636310165, // timestamp (in milliseconds since UNIX epoch)
    //   // maxDate: 1556277910456, // timestamp (in milliseconds since UNIX epoch)
    //   // bodyRegex: '(.*)How are you(.*)', // content regex to match

    //   /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
    //   // read: 0, // 0 for unread SMS, 1 for SMS already read
    //   // _id: 1234, // specify the msg id
    //   // thread_id: 12 // specify the conversation thread_id
    //   // address: '+1888------', // sender's phone number
    //   // body: 'How are you', // content to match
    //   /** the next 2 filters can be used for pagination **/
    //   // indexFrom: 0, // start from index 0
    //   // maxCount: 10, // count of SMS to return each time
    // };

    // SmsAndroid.list(
    //   JSON.stringify(filter),
    //   fail => {
    //     console.log('Failed with this error: ' + fail);
    //   },
    //   (count, smsList) => {
    //     // console.log('Count: ', count);
    //     // console.log('List: ', smsList);
    //     var arr = JSON.parse(smsList);

    //     // const sms = arr[19]?.body;

    //     // console.log('Sms:', sms);

    //     arr.forEach(function (object) {
    //       // console.log('Object: ' + JSON.stringify(object));
    //       // console.log('-->' + object.date);
    //       // console.log('-->' + object.body);

    //       const sms = object?.body;

    //       // Regular expression patterns to match payment information
    //       const amountPattern = /INR\s+(\d+(?:,\d{1,3})*(?:\.\d{1,2})?)/;
    //       const paymentMethodPattern = /from\s+(.*?)\s/i;
    //       const debitPattern = /debited/i;
    //       const creditPattern = /credited/i;

    //       // Extract payment amount
    //       const amountMatch = sms.match(amountPattern);
    //       const paymentAmount = amountMatch
    //         ? parseFloat(amountMatch[1].replace(/,/g, ''))
    //         : null;

    //       // Extract payment method
    //       const paymentMethodMatch = sms.match(paymentMethodPattern);
    //       const paymentMethod = paymentMethodMatch
    //         ? paymentMethodMatch[1]
    //         : null;

    //       // Determine expense category and transaction type
    //       let expenseCategory = 'Unknown';
    //       let transactionType = 'Unknown';

    //       if (paymentMethod) {
    //         // Determine expense category based on payment method
    //         if (paymentMethod.toLowerCase().includes('credit card')) {
    //           expenseCategory = 'Credit Card';
    //         } else if (paymentMethod.toLowerCase().includes('debit card')) {
    //           expenseCategory = 'Debit Card';
    //         } else if (paymentMethod.toLowerCase().includes('upi')) {
    //           expenseCategory = 'UPI';
    //         } else if (paymentMethod.toLowerCase().includes('net banking')) {
    //           expenseCategory = 'Net Banking';
    //         } else {
    //           expenseCategory = 'Other';
    //         }

    //         // Determine transaction type (credit or debit)
    //         if (sms.match(debitPattern)) {
    //           transactionType = 'Debit';
    //         } else if (sms.match(creditPattern)) {
    //           transactionType = 'Credit';
    //         }
    //       }

    //       // Use the extracted information
    //       console.log('Payment Amount:', paymentAmount);
    //       console.log('Payment Method:', paymentMethod);
    //       console.log('Expense Category:', expenseCategory);
    //       console.log('Transaction Type:', transactionType);

    //       console.log('ESMS:', sms);
    //     });
    //   },
    // );

    setHistoryData(paymentHistory);
    setSelected('');
  };

  return (
    <>
      <HeaderButton navigation={navigation} />

      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: !selected ? 'black' : '#fff',
            margin: 5,
            padding: 6,
            width: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => allData()}>
          <Text style={{color: selected ? 'black' : '#fff'}}>ALL</Text>
        </TouchableOpacity>

        <FlatList
          horizontal
          data={allCategory}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: selected === item.id ? 'black' : '#fff',
                margin: 5,
                padding: 6,
                // width: 100,
                paddingVertical: 10,
                paddingHorizontal: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={item.id + new Date()}
              onPress={() => filterByCat(item.id)}>
              <Text style={{color: selected === item.id ? '#fff' : '#000'}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.transactionId}
        />

        {/* {allCategory?.map((item, index) => {
          return (
           
          );
        })} */}
      </View>

      <SafeAreaView style={styles.container}>
        {historyData?.length === 0 && (
          <View style={{flex: 1, marginTop: 200}}>
            <Error errorMsg="Nothing Found" navigation={navigation} />
          </View>
        )}

        <FlatList
          data={historyData}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.transactionId}
        />
      </SafeAreaView>

      <CustomChart selected={selected} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPColors.white,
    padding: 10,
  },
  item: {
    backgroundColor: SPColors.white,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: SPColors.bleachGrey,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});
