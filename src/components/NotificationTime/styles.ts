import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  notificationTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  timeContainer: {
    backgroundColor: "#F8F8F6",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    height: 48,
    paddingLeft: 20,
    gap: 16,
  },
  addTimeIcon: {
    backgroundColor: "rgba(63, 189, 241,0.2)",
    borderRadius: 14,
    padding: 12,
  },
});
