import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


type AppProps = {
    placeholder:string,
    error?:string,
    inputHeight?:number,
}
const BasicInput = ({placeholder,error,inputHeight=15}:AppProps) => {
  return (
        
        <View style={{...styles.inputView,paddingTop:inputHeight}}>
    <TextInput style={styles.input} placeholder={placeholder} onChangeText={(value)=>console.log(value)}/>
     {error && <Text>error</Text>}
    </View>
  )
}

export default BasicInput

const styles = StyleSheet.create({
    inputView:{
        borderBottomWidth:1,
        borderBottomColor:"grey",
        marginBottom:10,
        width:"100%"
    },
    input:{
        position:"relative",
        bottom:-4,
    },error:{
     
    }
})