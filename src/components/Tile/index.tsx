import { Text, View, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { reminderModel } from "src/types/remainder";
import { globalStyles } from "@/styles/global";
import { styles } from "./styles";
import { typography } from "@/styles/typography";

type tileProps = {
  tileName: string;
  subText: string;
  toogle: boolean;
};
const Tile = () => {
  return (
    <Pressable style={styles.tile}>
      <View style={styles.tileRightContainer}>
        <FontAwesome name="user" size={24} color="#C1C7D0" />
        <View>
          <Text style={styles.tileHeader}>Account information</Text>
          <Text style={typography.subText}>
            Change your Account information
          </Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color="#C1C7D0" />
    </Pressable>
  );
};

export default Tile;
