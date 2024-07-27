import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Reminder from "@/components/Reminder/Reminder";
import { database } from "@/utils/database";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../i18n";
import { reminderModel } from "@/types/remainder";
import { screenWidth, screenHeight } from "@/styles/metrics";

type Props = NativeStackScreenProps<RootStackParamList, "Reminders">;

const Reminders = ({ route, navigation }: Props) => {
  const [reminders, setReminders] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    // database.createReminderTable();
    // database.addReminder({title:"It Works 4",body:"I fina",alertTime:"thursday 6"})
    // .then((results) => console.log(results))
    // .catch((error) => console.log(error));
    // database.clearAllReminders().then((results: any) => setReminders([]));
    database
      .getReminders()
      .then((results: any) => setReminders(results))
      .catch((error) => console.log(error));
  }, []);

  const handleAddTodo = (reminder: reminderModel) => {
    database
      .addReminder(reminder)
      .then((results: any) => setReminders(results))
      .catch((error) => console.log(error));
  };
  const handleUpdateTodo = () => {};
  const handledeleteTodo = () => {};
  const handleddTodo = () => {};
  return (
    <View
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.container,
      }}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            {/* <MaterialCommunityIcons
              name="account-circle-outline"
              size={40}
              color="black"
            /> */}
            <SimpleLineIcons name="settings" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={{ fontFamily: "Montserrat-SemiBold" }}>REMYND</Text>
          </View>
          <View style={styles.addTaskView}>
            <TouchableOpacity
              style={styles.addTextButton}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("AddReminder")}>
              <AntDesign name="pluscircle" size={40} color="#0397FF" />
            </TouchableOpacity>
            {/* <Text style={styles.addTaskText}>{i18n.t("addreminder")}</Text> */}
          </View>
        </View>
        <View style={styles.headerSearch}>
          <FontAwesome name="search" size={20} color="grey" />
          <TextInput placeholder="Search here..." style={{ flex: 1 }} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        // alwaysBounceVertical={false}
      >
        {reminders &&
          reminders.map((reminder: any) => {
            return (
              <Reminder
                key={reminder.id}
                title={reminder.title}
                body={reminder.body}
                alertTime={reminder.alertTime}
                onDelete={() => database.deleteReminder(reminder.id)}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5bd",
    // paddingHorizontal: screenWidth * 0.03,
    // paddingHorizontal: screenWidth * 0.5,

  },
  header: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    // paddingHorizontal: screenWidth * 0.00703,
    paddingHorizontal: screenWidth * 0.03,

  },
  headerSearch: {
    backgroundColor: "#f5f5f5bd",
    marginHorizontal: screenWidth * 0.03,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 10,
    paddingLeft: 10,
    height: screenHeight * 0.0435,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 10,
  },
  addTaskView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addTaskText: {
    backgroundColor: "#9DCCFF",
    paddingHorizontal: 7,
    borderRadius: 15,
    color: "#005CBB",
    fontSize: 10,
  },
  addTextButton: {
    position: "relative",
    left: 7,
    zIndex: 100,
  },
});
