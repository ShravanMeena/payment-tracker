import { View, Text } from 'react-native'
import React from 'react'

export default function SPView({children,style}) {
  return (
    <View style={style}>
        {children}
    </View>
  )
}