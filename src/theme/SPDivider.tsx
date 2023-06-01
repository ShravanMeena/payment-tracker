import { View, Text } from 'react-native'
import React from 'react'
import { SPColors } from './SPTheme'

export default function SPDivider() {
    return (
        <View style={{
            width: "100%",
            height: 1,
            backgroundColor: SPColors.greyText
        }} />
    )
}