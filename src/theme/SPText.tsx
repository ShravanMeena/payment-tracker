
import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';
import { SPColors, SPFontFamily, SPFontSize, SPFontWeight, SPOpacity } from './SPTheme';

interface SPTextProps extends TextProps {
  style?: TextStyle
  children: any
  fontWeight?: SPFontWeight,
  testID?: string,
  fontStyle?: string,
  color?: SPColors | string,
  fontSize?: SPFontSize,
  textAlign?: TextAlignType,
  opacity?: SPOpacity,
  regular?: boolean,
  heavy?: boolean,
  semibold?: boolean,
  bold?: boolean,
  left?: boolean,
  medium?: boolean,
  pBottom?: number,
  pLeft?: number,
  pRight?: number | string,
  pTop?: number,
  pHorizontal?: number,
  pVertical?: number,
  backgroundColor?: SPColors,
}

type TextAlignType = 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;

export enum TextAlign {
  left = 'left',
  right = 'right',
  center = 'center',
  justify = 'justify',
  auto = 'auto'
}

const SPText: React.FC<SPTextProps> = ({
  style,
  children,
  fontWeight,
  testID,
  fontStyle,
  fontSize,
  textAlign,
  opacity,
  color,
  heavy,
  semibold,
  bold,
  medium,
  pLeft,
  pRight,
  pTop,
  pBottom,
  pHorizontal,
  pVertical,
  onPress,
  backgroundColor,
  regular
}) => {
  const getFontFamily = () => {
    if (semibold) {
      return SPFontFamily.semiBold
    } else if (heavy) {
      return SPFontFamily.heavy
    } else if (bold) {
      return SPFontFamily.bold
    }else if (medium) {
      return SPFontFamily.medium
    }
    else if (regular) {
      return SPFontFamily.regular
    }
    return SPFontFamily.medium
  }

  return (
    <Text allowFontScaling={false}
      //@ts-ignore
      style={
        {
          fontStyle: fontStyle || 'normal',
          color: color || SPColors.greyDark,
          fontFamily: getFontFamily(),
          fontSize: fontSize || SPFontSize.regular,
          textAlign: textAlign || 'auto',
          opacity: opacity ? opacity : 1,
          fontWeight: fontWeight || null,
          backgroundColor: backgroundColor || SPColors.transparent,
          paddingBottom: pBottom || 0,
          paddingLeft: pLeft || 0,
          paddingRight: pRight || 0,
          paddingTop: pTop || 0,
          paddingVertical: pVertical || 0,
          paddingHorizontal: pHorizontal || 0,
          ...style
        }
      }
      onPress={onPress}
      accessibilityLabel={testID}
      testID={testID}>{children}
    </Text>
  )
}

const styles = StyleSheet.create({


})


export default SPText;