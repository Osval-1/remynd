import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { globalStyles } from "../styles/global";




type Props = NativeStackScreenProps<RootStackParamList, "AddReminder">;


const AddReminder = ({route,navigation}:Props) => {
  return (
    <View>
      <Text>AddReminder</Text>
    </View>
  )
}

export default AddReminder

const styles = StyleSheet.create({})