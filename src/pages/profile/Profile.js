import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SPCard from '../../theme/SPCard'
import SPInput from '../../components/SPInput'
import SPButton from '../../components/SPButton/SPButton'
import SPText from '../../theme/SPText'
import { SPColors } from '../../theme/SPTheme'

export default function Profile() {
    const [name, setName] = useState("Shravan")
    const [mobileNumber, setMobileNumber] = useState("9660801827")
    const [email, setEmail] = useState("")
    return (
        <SPCard cardStyle={{
            padding: 10,
            flex: 1
        }}>
            <SPInput text={name} onChangeText={setName} placeholder="Name" />
            <SPInput text={mobileNumber} onChangeText={setMobileNumber} placeholder="Mobile number" />
            <SPInput text={email} onChangeText={setEmail} placeholder="Email" />
            <SPButton
                onPress={() => alert("saved")}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0
                }}>
                <SPText color={SPColors.white} fontSize={20}>
                    SAVE
                </SPText>
            </SPButton>
        </SPCard>
    )
}