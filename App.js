import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExampleScreen from './src/ExampleScreen'

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ExampleScreen />
    </View>
  )
}

const styles = StyleSheet.create({})