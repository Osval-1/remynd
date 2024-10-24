import { Text, View, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";

type weekDayProps = {
  day: string;
};

const WeekDay = ({ day }: weekDayProps) => {
  return (
    <Pressable style={styles.weekDayContainer}>
      <Text style={styles.weekDayText}>{day}</Text>
    </Pressable>
  );
};

export default WeekDay;
