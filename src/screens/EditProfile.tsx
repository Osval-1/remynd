import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { globalStyles } from "../styles/global";
import { Entypo } from '@expo/vector-icons';






type Props = NativeStackScreenProps<RootStackParamList, "EditProfile">;

const EditProfile = ({route,navigation}:Props) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={navigation.goBack}
        >
      <Entypo name="chevron-left" size={30} color="black" style={styles.backButton} />
        </TouchableOpacity>
      <Text style={{textAlign:"center",width:"100%",fontSize:20}}>EditProfile</Text>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
  },
  backButton:{
    backgroundColor:"#fff",
    elevation:5,
    shadowColor:"blue",
    borderRadius:999,
  }
})