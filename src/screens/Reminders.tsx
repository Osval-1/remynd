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
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { globalStyles } from "@/styles/global";
import Reminder from "@/components/Reminder/Reminder";
import { database } from "@/utils/database";
import i18n from "../i18n";
import { reminderModel } from "@/types/remainder";

type Props = NativeStackScreenProps<RootStackParamList, "Reminders">;

const Reminders = ({ route, navigation }: Props) => {
  const [reminders, setReminders] = useState([]);
  useEffect(() => {
    // database.createReminderTable();
    // database.createReminder("It Works 2","I fina","thursday 6")
    // .then((results) => console.log(results))
    // .catch((error) => console.log(error));
    // database.clearAllReminders().then((results: any) => setReminders([]));
    database
      .getReminders()
      .then((results: any) => setReminders(results))
      .catch((error) => console.log(error));
  }, []);

  const handleAddTodo = (reminder:reminderModel) => {
    database.addReminder(reminder)
    .then((results:any)=>setReminders(results))
    .catch((error=>console.log(error)))
  };
  const handleUpdateTodo = () => {};
  const handledeleteTodo = () => {};
  const handleddTodo = () => {};
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      // alwaysBounceVertical={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={40}
              color="black"
            />
          </TouchableOpacity>
          <View>
            <Text>REMYND</Text>
          </View>
          <View style={styles.addTaskView}>
            <TouchableOpacity
              style={styles.addTextButton}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("AddReminder")}
            >
              <AntDesign name="pluscircle" size={40} color="#007AFF" />
            </TouchableOpacity>
            <Text style={styles.addTaskText}>{i18n.t("addreminder")}</Text>
          </View>
        </View>
        <View style={styles.headerSearch}>
          <FontAwesome name="search" size={20} color="grey" />
          <TextInput placeholder="Search here..." style={{ width: "100%" }} />
        </View>
      </View>
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
  );
};

export default Reminders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5bd",
  },
  header: {
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  headerSearch: {
    backgroundColor: "#f5f5f5bd",
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 5,
    padding: 5,
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
