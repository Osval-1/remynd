import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


type AppProps = {
    placeholder:string,
    error?:string
}
const BasicInput = ({placeholder,error}:AppProps) => {
  return (
    <View style={styles.inputView}>
    <TextInput style={styles.input} placeholder={placeholder} onChangeText={(value)=>console.log(value)}/>
     {error && <Text>error</Text>}
    </View>
  )
}

export default BasicInput

const styles = StyleSheet.create({
    inputView:{
        width:"90%",
        borderBottomWidth:1,
        borderBottomColor:"grey",
        height:50
    },
    input:{
        position:"relative",
        bottom:-27,
    },error:{
     
    }
})