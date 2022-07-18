import { SafeAreaView, Text,  } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '@common/Header'
import BackIcon from '@assets/backIcon.svg'
import { HEIGHT, WIDTH } from '@utils/Constant'


export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Header 
        icon={<BackIcon height={HEIGHT.h17} width={WIDTH.w18} />}
        title="LoginScreen"
        headingStyle={styles.headerHeading}
        />
      <Text onPress={()=> navigation.navigate('SignUp')}
      style={{
        fontFamily: "CircularStd-Bold",
        fontSize: 30
      }} >LoginScreen</Text>
        <Text onPress={()=> navigation.navigate('SignUp')}
      style={{
        fontFamily: "CircularStd-Medium",
        fontSize: 30
      }} >LoginScreen</Text>
        <Text onPress={()=> navigation.navigate('SignUp')}
      style={{
        fontFamily: "CircularStd-Book",
        fontSize: 30
      }} >LoginScreen</Text>

      
    </SafeAreaView>
  )
}

