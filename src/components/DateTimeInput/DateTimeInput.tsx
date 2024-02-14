import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

type AppProps = {
    label:string
}

const DateTimeInput = ({label}:AppProps) => {
  return (
    <TouchableOpacity style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{color:"#898686",borderBottomWidth:1,borderBottomColor:"#898686"}}>{label}</Text>
    </TouchableOpacity>
  )
}

export default DateTimeInput

const styles = StyleSheet.create({})