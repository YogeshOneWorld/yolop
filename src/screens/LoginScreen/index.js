import { SafeAreaView, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import Header from '@components/Header'
import BackIcon from '@assets/backIcon.svg'
import { FONTS, HEIGHT, SPACING, WIDTH } from '@utils/constant'
import { APP_FONTS } from '@utils/fonts'
import { sizeToDp } from '@utils/'
import SignInLogo from '@assets/signInLogo.svg'
import CustomTextInput from '@components/TextInput'
import MailIcon from '@assets/mailbox.svg'
import Button from '@components/Button'
import ProfileBox from '@components/ProfileBox'



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} />}
        title="Login"
        headingStyle={styles.headerHeading}
      />
      {/* <View style={styles.logo}>
        <SignInLogo height={sizeToDp(304)} width={sizeToDp(263)} />
      </View> */}
      <View style={{paddingHorizontal: SPACING.sw15}}>
      <CustomTextInput 
      label={email}
      // icon={<MailIcon height={sizeToDp(20)} width={sizeToDp(20)} />}
      onChangeText={(text)=> setEmail(text)} 
      placeholder="name"
      value={email}
      error={emailError}
      />

      <Button 
      type="outline"
      size={'medium'}
      text={"done"}
      // onPress,
      style={{marginTop: 15}}
      // icon,
      // iconStyle,
      />
      <ProfileBox />
      </View>
    </SafeAreaView>
  )
}

