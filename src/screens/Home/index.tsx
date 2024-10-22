import { ScrollView, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NewButton } from "@/components/Button/Button";
import { NewReminder } from "@/components/Reminder/Reminder";
import { globalStyles } from "@/styles/global";
import { typography } from "@/styles/typography";
import { images } from "@/assets/static";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
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
        </View>
        {/* <NewButton /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
