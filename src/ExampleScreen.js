import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ExampleAction } from './redux/action/ExampleAction'
import LoginScreen from './component/screen/LoginScreen'

export default function ExampleScreen() {
  const dispatch = useDispatch()


  const value = useSelector((state) => state);
  console.log("redux data is",value)


  return (
   <LoginScreen />
  )
}

const styles = StyleSheet.create({})