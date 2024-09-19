import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { reminderModel } from "src/types/remainder";
import { globalStyles } from "@/styles/global";
import Entypo from "@expo/vector-icons/Entypo";
import { styles as style } from "./styles";

interface reminderCompModel extends reminderModel {
  onDelete?: () => void;
  onUpdate?: () => void;
}

const Reminder = ({ title, body, alertTime, onDelete }: reminderCompModel) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.alertTime}>{alertTime}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        activeOpacity={0.6}
        delayPressIn={50}
        onPress={onDelete}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Reminder;

export const NewReminder = () => {
  return (
    <Pressable style={style.reminderContainer}>
      <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
        <FontAwesome5 name="pills" size={20} color="grey" />
        <View style={{ justifyContent: "center" }}>
          <Text>Oxycodone</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text>10:00 AM</Text>
            <View
              style={{
                width: 3,
                height: 3,
                backgroundColor: "grey",
                borderRadius: 100,
              }}></View>
            <Text>Completed</Text>
          </View>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color="grey" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 100,
    elevation: 2,
    padding: 10,
  },
  title: {},
  body: {},
  alertTime: {},
  deleteButton: {
    marginLeft: 0,
    padding: 5,
  },
});
