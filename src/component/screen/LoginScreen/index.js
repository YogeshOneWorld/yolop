import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from '../../common/Header'

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
      <Text onPress={()=> navigation.navigate('SignUp')} >LoginScreen</Text>
    </SafeAreaView>
  )
}

