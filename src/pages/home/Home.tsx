import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SPColors, SPSpacing} from '../../theme/SPTheme';
import SPText from '../../theme/SPText';
import SPDivider from '../../theme/SPDivider';
import SPSpacer from '../../theme/SPSpacer';
import SPCard from '../../theme/SPCard';
import BasicInfo from './BasicInfo';
import Background from '../../components/Background';
import {theme} from '../../core/theme';
import {COLORS} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {addHaptic} from '../../utils/commonUtils';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605a-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d9d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bad96-145571e29d72',
    title: 'Four Item',
  },
  {
    id: '58694a0f-3da1a-471f-bd96-145571e29d72',
    title: 'FIVE Item',
  },
  {
    id: '58694a0f-3da1-471fa-bd96-145571e29d72',
    title: 'Six Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145a571e29d72',
    title: 'Seven Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29ds72',
    title: 'Eight Item',
  },
  {
    id: '58694a0f-3da1aa-471f-bd96-145571e29ds72',
    title: 'Nine Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557sa1e29ds72',
    title: 'Ten Item',
  },
];

export function Item({title}) {
  let isActive = title === 'First Item';

  const {navigate} = useNavigation();

  return (
    <SPCard cardStyle={isActive ? styles.activeItemCard : styles.itemCard}>
      <View style={styles.item}>
        <SPText
          textAlign="center"
          fontSize={20}
          // fontWeight="600"
          color={COLORS.black}>
          KALYAN GAMING
        </SPText>
        <SPSpacer height={SPSpacing.s} />
        <SPDivider />
        <SPSpacer height={SPSpacing.s} />

        <SPCard row spaceBetween>
          <SPCard center>
            <SPText>
              <Ionicons name="stats-chart-sharp" size={24} />
            </SPText>
            <SPText fontSize={14}>No Chart</SPText>
          </SPCard>
          <SPCard center>
            <SPText fontSize={22} color={SPColors.greenSOL}>
              ***_**_**
            </SPText>
            <SPText fontSize={14} color={SPColors.greenText}>
              Betting Open
            </SPText>
          </SPCard>
          {isActive ? (
            <TouchableOpacity onPress={() => navigate('GameTypes')}>
              <SPCard center>
                <SPText color={SPColors.greenText}>
                  <Ionicons name="play" size={45} />
                </SPText>
                <SPText fontSize={18}>Play</SPText>
              </SPCard>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => addHaptic()}>
              <SPCard center>
                <SPText color={SPColors.redText}>
                  <Ionicons name="close-circle-outline" size={40} />
                </SPText>
                <SPText fontSize={14}>Bid Closed</SPText>
              </SPCard>
            </TouchableOpacity>
          )}
        </SPCard>
      </View>
      <View style={styles.footerContainer}>
        <SPCard
          cardStyle={styles.footer}
          row
          spaceBetween
          pLeft={20}
          pRight={20}>
          <SPText style={styles.text}>Open - 9:40 PM</SPText>
          <SPText style={styles.text}>Close - 12:25 PM</SPText>
        </SPCard>
      </View>
    </SPCard>
  );
}

const Home = () => {
  return (
    <Background style={{padding: 10}}>
      <View style={styles.container}>
        {/* <BasicInfo /> */}
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeItemCard: {
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: COLORS.lightPrimary,
    marginTop: 10,
  },
  itemCard: {
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: COLORS.lightPrimary,
    marginTop: 10,
  },
  item: {
    backgroundColor: SPColors.white,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 32,
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    borderWidth: 1,
    width: '95%',
    borderRadius: 4,
    padding: 4,
    marginBottom: 4,
  },
  text: {color: COLORS.primary, fontSize: 14},
});

export default Home;
