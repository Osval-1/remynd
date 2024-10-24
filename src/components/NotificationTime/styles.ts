import { StyleSheet } from "react-native";
import { screenHeight } from "@/styles/metrics";
import { typography } from "@/styles/typography";

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
  mutateNotificationTime: {
    height: 48,
    borderRadius: 14,
    width: 48,
  },
  addTimeBackground: {
    backgroundColor: "#3FBDF1",
    height: 48,
    opacity: 0.1,
    borderRadius: 14,
  },
  addTimeIcon:{
    position: "absolute",
    top: "25%",
    left: "25%",
  }
});
