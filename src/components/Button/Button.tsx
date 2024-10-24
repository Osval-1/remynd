import { Text, View, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography } from "@/styles/typography";

const Button = ({}) => {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Done</Text>
      </View>
    </Pressable>
  );
};

export default Button;
