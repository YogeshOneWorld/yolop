import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'



export default function Header({icon, title, menubar, headingStyle}) {
  return (
    <View style={styles.container}>
     <View>{icon}</View>
      <Text style={headingStyle}>{title}</Text>
      <View>{menubar}</View>
    </View>
  )
}
