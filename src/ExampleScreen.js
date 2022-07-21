import { SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
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
import Icons from 'react-native-vector-icons/FontAwesome5';
import UserImage from '@components/UserImage'
// import Person from '@assets/person.svg'
import Person from '@assets/user.svg'
import EditIcon from '@assets/editIcon.svg'
import { COLORS } from '@utils/colors'
import UserDetailBox from '@components/UserDetailBox'
import { PROFILEData } from '@mock/ProfileData'
import CustomAlert from '@components/AlertBox'
// import { PROFILEDa } from "@m"

const myIcon1 = <Icons name={"envelope"} size={30} color="#000" />
export default function ExampleScreen({ navigation }) {
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
      <View style={{ paddingHorizontal: SPACING.sw15 }}>
        <CustomTextInput
          label={email}
          icon={myIcon1}
          onChangeText={(text) => setEmail(text)}
          placeholder="name"
          value={email}
          error={emailError}
        />

        <Button
          type="outline"
          size={'large'}
          text={"done"}
          // onPress,
          style={{ marginVertical: 15 }}
        // icon,
        // iconStyle,
        />
        <ProfileBox
          header={
            <Header
              icon={<BackIcon height={sizeToDp(18.89)} width={sizeToDp(17.44)} fill={COLORS.white} />}
              title="Your Profile"
              headingStyle={styles.profileHeader}
              style={styles.header}
            />
          }
          userImage={<UserImage
            icon={<Person height={HEIGHT.h144} width={HEIGHT.h144} />}
            editIcon={<EditIcon height={sizeToDp(17)} width={sizeToDp(17)} fill={COLORS.black} />}
            editIconbgColor="#fff"
          />}
          name={"Andrew Mathew"}
          email={"andrew_ainsley@gmail.com"}
          phone={"+1 123 456 7890"}
        />

        <UserDetailBox data={PROFILEData} />
        <CustomAlert isVisibleModal={false}>
          <Text>dcdshcds</Text>
        </CustomAlert>
      </View>
    </SafeAreaView>
  )
}

