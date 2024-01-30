import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";





type Props = NativeStackScreenProps<RootStackParamList, "Reminders">;

const EditProfile = ({route,navigation}:Props) => {
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})