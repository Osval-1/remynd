import { StyleSheet } from "react-native";
import { screenHeight } from "@/styles/metrics";
import { typography } from "@/styles/typography";

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
  icon$TextContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  reminderTextContainer: {
    justifyContent: "center",
  },
  reminderText: {
    ...typography.taskHeader,
    lineHeight: 20,
  },
  subTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dot: {
    width: 3,
    height: 3,
    backgroundColor: "grey",
    borderRadius: 100,
  },
});
