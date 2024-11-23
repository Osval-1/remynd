import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { reminderModel } from "@/types/reminder";
import { globalStyles } from "@/styles/global";
import { styles } from "./styles";
import { typography } from "@/styles/typography";

const NotificationTime = () => {
  return (
    <View style={styles.notificationTimeContainer}>
      <Pressable style={styles.timeContainer}>
        <MaterialIcons name="notifications-active" size={24} color="grey" />
        <Text style={typography.header}>10:00AM</Text>
      </Pressable>
      <Pressable>
        <Entypo
          name="plus"
          size={24}
          color="#3FBDF1"
          style={styles.addTimeIcon}
        />
      </Pressable>
    </View>
  );
};

export default NotificationTime;
