import { ScrollView, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button/Button";
import { globalStyles } from "@/styles/global";
import { typography } from "@/styles/typography";
import { images } from "@/assets/static";
import SearchInput from "@/components/SearchInput";
import Tile from "@/components/Tile";

const Settings = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={styles.header}>Settings</Text>
        <View style={{ marginTop: 40, gap: 17 }}>
          <Text style={typography.taskHeader}>General</Text>
          <View style={styles.underline}></View>
          <Tile />
          <Tile />
          <Tile />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
