import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { SPColors, SPFontSize } from '../../theme/SPTheme'
import SPText from '../../theme/SPText'

export default function SPButton({ onPress, children,style }) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: SPColors.greenSOL,
            paddingVertical: 16,
            paddingHorizontal: 60,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            ...style
        }}>
            <SPText style={{
                fontSize: SPFontSize.xl
            }} >
                {children}
            </SPText>
        </TouchableOpacity>
    )
}

