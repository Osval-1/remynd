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
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    // <SafeAreaView>
    <ScrollView contentContainerStyle={globalStyles.container}>
      <TextInput />
      <View>
        <Text>Hello, Kathryn</Text>
        <View>
          <Text>Your plan for today</Text>
          <Text>1 of 4 completed</Text>
          <Image />
        </View>
        <Text>Show More</Text>
      </View>
      <Text></Text>
      <Text>Home</Text>
      <NewButton />
      <SearchInput />
    </ScrollView>
    // </SafeAreaView>
  );
};

export default Home;
