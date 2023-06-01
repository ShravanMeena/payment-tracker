import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTWEIGHT, SIZES} from '../theme';

const DrawerItem = props => {
  const {iconName, text, pro, notification,onPress} = props;

  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(state => !state);

  return (
    <TouchableOpacity disabled={notification} onPress={() => onPress()}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View
            style={[
              styles.iconContainer,
              {backgroundColor: pro ? COLORS.primary : COLORS.lightPrimary},
            ]}>
            <Icon
              name={iconName}
              size={30}
              color={pro ? COLORS.lightPrimary : COLORS.primary}
            />
          </View>
          <Text
            style={[
              styles.text,
              {fontWeight: pro ? FONTWEIGHT.bold : FONTWEIGHT.weight500},
            ]}>
            {text}
          </Text>
        </View>
        <View>
          {notification ? (
            <Switch
              trackColor={{false: COLORS.lightGrey, true: COLORS.primary}}
              thumbColor={isEnable ? COLORS.lightGrey : COLORS.primary}
              ios_backgroundColor={COLORS.lightGrey}
              onValueChange={toggleSwitch}
              value={isEnable}
            />
          ) : (
            <Icon name="chevron-right" size={25} color={COLORS.grey} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.lightPrimary,
    marginRight: 20,
    padding: 8,
    borderRadius: 10,
  },
  text: {
    color: COLORS.title,
    fontSize: SIZES.h2,
  },
});
