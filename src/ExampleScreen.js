import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ExampleAction } from './redux/action/ExampleAction'

export default function ExampleScreen() {
  const dispatch = useDispatch()


  const value = useSelector((state) => state);
  console.log("redux data is",value)


  return (
    <TouchableOpacity
    style={{height: 40, backgroundColor: 'red', width: '60%', justifyContent: 'center', alignItems: 'center'}}
    onPress={()=> dispatch(ExampleAction("yogesh"))}>
      <Text>ExampleScreen 1</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})