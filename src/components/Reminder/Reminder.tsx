import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppProps={
   title:string,
   body:string,
   alertTime:string,    
}

const Reminder = ({title,body,alertTime}:AppProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.alertTime}>{alertTime}</Text>
    </View>
  )
}

export default Reminder

const styles = StyleSheet.create({
  container:{
    margin:10,
    backgroundColor:"#fff",
    borderRadius:15,
    height:100,
    elevation:2,
    padding:10
  },
  title:{},
  body:{},
  alertTime:{},
})