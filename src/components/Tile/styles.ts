import { StyleSheet } from "react-native";
import { screenHeight } from "@/styles/metrics";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F4F5F7",
    paddingTop: 12,
    paddingBottom: 20,
  },
  tileRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  tileHeader: {
    ...typography.taskHeader,
    lineHeight: 25,
  },
  switchContainerStyle: {
    width: 40,
    height: 25,
    borderRadius: 25,
    padding: 2,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});
