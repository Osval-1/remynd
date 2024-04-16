import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import React,{useEffect} from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Reminder from "../components/Reminder/Reminder";
import * as SQLite from 'expo-sqlite';
import { databaseTransaction } from "../../src/utils/database";

type Props = NativeStackScreenProps<RootStackParamList, "Reminders">;

const Reminders = ({ route, navigation }: Props) => {
  useEffect(()=>{
    const db = SQLite.openDatabase('Reminders.db');
    // databaseTransaction.createReminderTable(db)
    // databaseTransaction.insertReminder(db,"get up","daily alarm","wednesday")
  },[])
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      // alwaysBounceVertical={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={40}
              color="black"
            />
          </View>
          <View>
            <Text>REMYND</Text>
          </View>
          <View style={styles.addTaskView}>
            <TouchableOpacity style={styles.addTextButton} activeOpacity={0.6} onPress={()=>navigation.navigate("AddReminder")}>
              <AntDesign name="pluscircle" size={40} color="#007AFF" />
            </TouchableOpacity>
            <Text style={styles.addTaskText}> Add Reminder</Text>
          </View>
        </View>
        <View style={styles.headerSearch}>
        <FontAwesome name="search" size={20} color="grey" />
          <TextInput placeholder="Search here..." style={{width:"100%"}} />
        </View>
      </View>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
      <Reminder title="this is the first alert" body="this is the first body message" alertTime="7th febuary 2017"/>
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
    paddingBottom:20,
  },
  headerSearch: {
    backgroundColor: "#f5f5f5bd",
    marginHorizontal:20,
    flexDirection:"row",
    alignItems:"center",
    gap:4,
    borderRadius:5,
    padding:5

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
