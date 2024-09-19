import { StyleSheet } from "react-native";
import { screenHeight } from "@/styles/metrics";

export const styles = StyleSheet.create({
  reminderContainer: {
    backgroundColor: "#F8F8F6",
    flexDirection: "row",
    borderRadius: 24,
    height: screenHeight * 0.088,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 26,
  },
});
