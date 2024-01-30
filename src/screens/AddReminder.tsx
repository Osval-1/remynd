import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";



type Props = NativeStackScreenProps<RootStackParamList, "Reminders">;


const AddReminder = ({route,navigation}:Props) => {
  return (
    <View>
      <Text>AddReminder</Text>
    </View>
  )
}

export default AddReminder

const styles = StyleSheet.create({})