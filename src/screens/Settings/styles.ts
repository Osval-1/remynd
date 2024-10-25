import { StyleSheet } from "react-native";
import { typography } from "@/styles/typography";
import { screenWidth, screenHeight } from "@/styles/metrics";
import { globalStyles } from "@/styles/global";

export const styles = StyleSheet.create({
  header: {
    ...typography.h1,
    marginTop: 10,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#F4F5F7",
  },
});
