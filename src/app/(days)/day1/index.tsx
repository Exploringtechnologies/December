import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const DayDetailsScreen = () => {
  return (

    <View>
      <Stack.Screen options={{title: 'Day 1'}} />
      <Text style={{fontFamily: "Amatic", fontSize: 100}}>Day Details Screen</Text>
    </View>
  )
}

export default DayDetailsScreen