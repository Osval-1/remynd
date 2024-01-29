import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';



type Props = NativeStackScreenProps<RootStackParamList, 'Reminders'>;

const Reminders = ({route,navigation}:Props) => {
  return (
    <View>
      <Text style={{textAlign:'center'}}>Reminders</Text>
    </View>
  )
}

export default Reminders

const styles = StyleSheet.create({})