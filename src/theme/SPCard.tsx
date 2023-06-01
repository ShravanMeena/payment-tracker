import React, { FC, PropsWithChildren } from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { SPColors } from './SPTheme';

interface Props extends PropsWithChildren {
    centerAligned?: boolean;
    center?: boolean;
    row?: boolean;
    color?: SPColors;
    even?: boolean;
    spaceBetween?: boolean;
    pTop?: number;
    pBottom?: number;
    pLeft?: number;
    pRight?: number;
    mTop?: number;
    mBottom?: number;
    mLeft?: number;
    mRight?: number;
    radius?: number;
    reverse?: boolean;
    height?: number | string;
    width?: number | string;
    radiusBottom?: number;
    radiusTop?: number;
    flex?: number
    end?: boolean;
    justifyCenter?: boolean;
    overflow?: 'visible' | 'hidden' | 'scroll';
    bottomLeftRadius?: number;
    bottomRightRadius?: number;
    fill?: boolean,
    absolute?: boolean,
    avoidTouch?: boolean,
    topLeftRadius?: number;
    topRightRadius?: number;
    borderWidth?: number,
    borderColor?: SPColors,
    backgroundColor?: SPColors,
    cardStyle?: StyleProp<ViewStyle>;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined
}

export const SPCard: FC<Props> = ({ children,
    center,
    centerAligned,
    row,
    color,
    even,
    spaceBetween,
    pTop,
    pBottom,
    pLeft,
    pRight,
    mTop,
    mBottom,
    mLeft,
    mRight,
    radius,
    reverse,
    height,
    width,
    radiusBottom,
    radiusTop,
    flex,
    end,
    justifyCenter,
    overflow,
    bottomLeftRadius,
    bottomRightRadius,
    fill,
    topLeftRadius,
    topRightRadius,
    absolute,
    avoidTouch,
    cardStyle,
    borderWidth,
    borderColor,
    backgroundColor,
    flexWrap
}) => {
    return (
        <View
            pointerEvents={avoidTouch ? 'none' : 'auto'}
            style={[{
                ...row && styles.row,
                ...centerAligned && styles.centerAligned,
                ...center && styles.center,
                ...even && styles.evenSpaced,
                ...spaceBetween && styles.spaceBetween,
                ...reverse && styles.reverse,
                ...end && styles.end,
                ...justifyCenter && styles.justifyCenter,
                ...flex && { flex: flex },
                ...fill && { flex: 1 },
                ...bottomLeftRadius && { borderBottomLeftRadius: bottomLeftRadius },
                ...bottomRightRadius && { borderBottomRightRadius: bottomRightRadius },
                ...topLeftRadius && { borderTopLeftRadius: topLeftRadius },
                ...topRightRadius && { borderTopRightRadius: topRightRadius },
                backgroundColor: color || SPColors.transparent,
                ...absolute && { position: 'absolute', top: pTop, bottom: pBottom, left: pLeft, right: pRight },
                ...pBottom && {paddingBottom: pBottom},
                ...pLeft && {paddingLeft: pLeft},
                ...pRight && {paddingRight: pRight},
                ...pTop && {paddingTop: pTop},
                marginBottom: mBottom || 0,
                marginLeft: mLeft || 0,
                marginRight: mRight || 0,
                marginTop: mTop || 0,
                borderRadius: radius || 0,
                overflow: overflow || 'visible',
                height: height,
                width: width,
                borderWidth: borderWidth || 0,
                borderColor: borderColor || SPColors.transparent,
                flexWrap: flexWrap,
                ...cardStyle && cardStyle
            },
            
            ]}
        >
            {children}
        </View >
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    centerAligned: {
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    evenSpaced: {
        justifyContent: 'space-evenly'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    reverse: {
        alignContent: 'flex-end'
    },
    end: {
        justifyContent: "flex-end"
    },
    justifyCenter: {
        justifyContent: 'center'
    }
});

export default SPCard