import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Header from '@components/Header'
import BackIcon from '@assets/backIcon.svg'
import { sizeToDp } from '@utils/'
import SignInLogo from '@assets/signInLogo.svg'
import CustomTextInput from '@components/TextInput'
import Button from '@components/Button'
import { commonStyle } from '@utils/commonStyle'
import ConfirmButton from '@components/ConfirmMailButton'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)

    const onButtonPress = () => {
        // navigation.navigate("RegisterProfile")
        alert('processing')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
                title="Forgot Password"
                headingStyle={styles.headerHeading}
            />
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}>
                <View style={commonStyle.centerText}>
                    <SignInLogo height={sizeToDp(304)} width={sizeToDp(263)} />
                </View>
                <View style={styles.heading}>
                    <Text style={commonStyle.commonSmallText}>
                        Select which contact details should
                        we use to reset your password</Text>
                </View>
               <ConfirmButton />

                <Button
                    size={'large'}
                    text={"Sign Up"}
                    onPress={onButtonPress}
                />


            </ScrollView>
        </SafeAreaView>
    )
}

export default ForgotPassword

