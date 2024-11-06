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
      <ScrollView
        contentContainerStyle={styles.container}
        overScrollMode="never">
        <Text style={styles.header}>Settings</Text>
        <View style={{ marginTop: 40, gap: 17 }}>
          <Text style={typography.taskHeader}>Notification</Text>
          <View style={styles.underline}></View>
          <Tile
            tileName="Sound Track"
            icon="notification-2-fill-1-2"
            subText="Midnight Sun.mp3"
          />
          <Tile
            tileName="Vibration"
            icon="vibration_24dp_5F6368_FILL0_wght400_GRAD0_opsz24"
            subText="Vibrate while alerting"
            toogle={true}
          />
          <Tile
            tileName="Sync"
            icon="sync_24dp_5F6368_FILL0_wght400_GRAD0_opsz24"
            subText="Sync with other devices"
            toogle={true}
          />
        </View>
        <View style={{ marginTop: 40, gap: 17 }}>
          <Text style={typography.taskHeader}>General</Text>
          <View style={styles.underline}></View>
          <Tile
            tileName="Rate"
            icon="Rating-Filled"
            subText="Give us a rating"
          />
          <Tile tileName="Help" icon="Info" subText="How to use Remynd" />
          <Tile
            tileName="Invite"
            icon="communication_24dp_5F6368_FILL0_wght400_GRAD0_opsz24"
            subText="Invite your friends to use Remynd"
          />
          <Tile
            tileName="Feedback"
            icon="feedback_24dp_5F6368_FILL0_wght400_GRAD0_opsz24"
            subText="Off"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
