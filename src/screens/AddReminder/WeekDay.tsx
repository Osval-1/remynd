import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const WeekDay = () => {
  return (
    <View
      style={{
        backgroundColor: "#F8F8F6",
        borderRadius: 100,
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontFamily: "Poppins-Semibold",
          fontSize: 24,
        }}>
        S
      </Text>
    </View>
  );
};

export default WeekDay;
