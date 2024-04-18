import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

type AppProps={
   title:string,
   body:string,
   alertTime:string,
   onDelete:()=>void    
}

const Reminder = ({title,body,alertTime}:AppProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.alertTime}>{alertTime}</Text>
      <TouchableOpacity style={styles.deleteButton}>
      <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
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
  deleteButton:{
    marginLeft:0
  }
})