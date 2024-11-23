import { ScrollView, Text, View, TextInput, Image } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewReminder } from "@/components/Reminder/Reminder";
import { typography } from "@/styles/typography";
import { images } from "@/assets/static";
import SearchInput from "@/components/SearchInput";
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from "expo-sqlite";
import { addItemAsync } from "@/utils/database_operations";
const Home = () => {
  const db = useSQLiteContext();
  useEffect(() => {
    const getdata = async () => {
      const data = await db.getAllAsync("SELECT * FROM reminders ");
      console.log(data);
    };
    const addData = async () => {
      const data = await addItemAsync(db, {
        reminder: "fritz",
        due_date: "wednesday",
        due_time: "12:00pm",
      });
      console.log(data);
    };
    // addData();
    getdata();
  });

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        overScrollMode="never">
        <SearchInput />
        <View style={styles.bannerContainer}>
          <View>
            <Text style={styles.header}>Hello,</Text>
            <Text style={styles.bottomHeader}>Kathryn</Text>
          </View>
          <View style={styles.banner}>
            <Image source={images.banner} style={styles.imageStyle} />
            <View style={styles.bannerTextContainer}>
              <Text style={typography.h2}>Your plan</Text>
              <Text style={typography.h2}>for today</Text>
              <Text style={styles.bannerGreyText}>1 of 4 completed</Text>
            </View>
            <View style={styles.bannerRedTextContainer}>
              <Text style={styles.bannerRedText}>Show More</Text>
              <View style={styles.underline}></View>
            </View>
          </View>
        </View>
        <Text style={styles.reminderHeader}>Due Today</Text>
        <View style={{ gap: 12 }}>
          <NewReminder />
          <NewReminder />
          <NewReminder />
          <NewReminder />
          <NewReminder />
        </View>
        {/* <NewButton /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
