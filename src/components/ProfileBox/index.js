import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles'
import { profileBg } from '@assets/'

export default function ProfileBox({userImage, header, name, email, phone}) {
  return (
    <ImageBackground source={profileBg} style={styles.container} resizeMode="stretch">
        {header}
      <View style={styles.insideBoxView} >
      {userImage}
      <Text style={styles.insideBoxNameText}>{name}</Text>
      <Text style={styles.insideBoxText}>{email}</Text>
      <Text style={styles.insideBoxText}>{phone}</Text>
      </View>
     </ImageBackground>
  )
}
