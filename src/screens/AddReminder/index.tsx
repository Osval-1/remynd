import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { RootStackParamList } from "App";
import { globalStyles } from "@/styles/global";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { typography } from "@/styles/typography";
import WeekDay from "./WeekDay";
import NotificationTime from "@/components/NotificationTime";
import Button from "@/components/Button/Button";

type Props = NativeStackScreenProps<RootStackParamList, "AddReminder">;

const AddReminder = ({ navigation }: Props) => {
  const handleBackButtonPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <Pressable style={styles.returnButton} onPress={handleBackButtonPress}>
        <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
      </Pressable>
      <Text style={typography.h1}>Add Reminder</Text>
      <View style={styles.taskNameContainer}>
        <Text style={typography.taskHeader}>Task Name</Text>
        <View style={styles.taskNameInputContainer}>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <FontAwesome5 name="pills" size={25} color="grey" />
            <TextInput
              placeholder="Oxycodone"
              placeholderTextColor={"#000"}
              style={{ ...typography.taskHeader, width: "75%" }}
            />
          </View>
          <AntDesign name="scan1" size={24} color="black" />
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={typography.taskHeader}>Amount & How long?</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.date$timeContainer}>
            <View style={styles.date$timeLeft}>
              <FontAwesome5 name="pills" size={20} color="grey" />
              <Text style={typography.taskHeader}>2</Text>
            </View>
            <View style={styles.date$timeRight}>
              <Text style={styles.date$timeText}>date</Text>
              <FontAwesome6 name="caret-down" size={10} color="grey" />
            </View>
          </View>
          <View style={styles.date$timeContainer}>
            <View style={styles.date$timeLeft}>
              <Ionicons name="calendar-clear-sharp" size={20} color="grey" />
              <Text style={typography.taskHeader}>30</Text>
            </View>
            <View style={styles.date$timeRight}>
              <Text style={styles.date$timeText}>time</Text>
              <Ionicons name="caret-down" size={10} color="grey" />
            </View>
          </View>
        </View>
      </View>
      <Text style={typography.taskHeader}>Repeat</Text>
      <View style={{ flexDirection: "row", gap: 13, marginBottom: 50 }}>
        <WeekDay day="S" />
        <WeekDay day="M" />
        <WeekDay day="T" />
        <WeekDay day="W" />
        <WeekDay day="T" />
        <WeekDay day="F" />
        <WeekDay day="S" />
      </View>
      <View>
        <Text style={typography.taskHeader}>Notification</Text>
        <NotificationTime />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default AddReminder;
