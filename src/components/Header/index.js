import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'



export default function Header({ icon, title, menubar, headingStyle }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSideView}>{icon}</View>
      <Text style={[headingStyle, styles.centerView]}>{title}</Text>
      <View style={styles.rightSideView}>
        {menubar}
      </View>
    </View>
  )
}
