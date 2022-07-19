import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

export default function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={()=> navigation.goBack()}>SignUpScreen</Text>
    </View>
  )
}
