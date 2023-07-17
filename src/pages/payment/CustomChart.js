import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PieChart} from 'react-native-chart-kit';
import {LocalStorage} from '../../helpers/LocalStorage';
import {useIsFocused} from '@react-navigation/native';

// const data = [
//   {
//     name: "Seoul",
//     population: 21500000,
//     color: "rgba(131, 167, 234, 1)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Toronto",
//     population: 2800000,
//     color: "#F00",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Beijing",
//     population: 5271200,
//     color: "green",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "New York",
//     population: 8538000,
//     color: "#ffffff",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Moscow",
//     population: 11920000,
//     color: "rgb(0, 0, 255)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   }
// ];

export default function CustomChart({selected}) {
  let budgetByCategory = LocalStorage.getString('budgetByCategory')
    ? JSON.parse(LocalStorage.getString('budgetByCategory'))
    : [];

  const [data, setData] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      if (budgetByCategory?.length === 0) {
        return;
      }

      let newData = [];

      for (let index = 0; index < budgetByCategory.length; index++) {
        const element = budgetByCategory[index];
     
        newData.push({
          name: element.title,
          population: parseInt(element.amount),
          color: element.color,
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        });
      }

      setData(newData);
    }
  }, [isFocused, selected]);

  return (
    <>
      {data?.length > 0 && (
        <PieChart
          data={data}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          // chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[5, 5]}
          absolute
        />
      )}
    </>
  );
}
