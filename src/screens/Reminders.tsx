import { StyleSheet, Text, View,TouchableOpacity,ImageBackground} from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { globalStyles } from "../styles/global";





type Props = NativeStackScreenProps<RootStackParamList, "Reminders">;

const Reminders = ({ route, navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <View>
          <FontAwesome
            name="user-circle"
            size={50}
            color="silver"
            // style={styles.headerImage}
          />
        </View>
        <View>
          <Text>REMYND</Text>
        </View>
        <View style={styles.addTaskView}>
          <TouchableOpacity style={styles.addTextButton} activeOpacity={0.6}>
          <AntDesign name="pluscircle" size={45} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.addTaskText}> Add Task</Text>
        </View>
      </View>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height:80,
    borderBottomWidth:1,

  },
  addTaskView: {
    flexDirection: "row",
    alignItems: "center",
  },
  addTaskText: {
    backgroundColor: "#9DCCFF",
    paddingHorizontal:5,
    borderRadius:15,
    color:"#005CBB",
    fontSize:12
  },addTextButton:{
    position:"relative",
    left:7,
    zIndex:100
  }
});
