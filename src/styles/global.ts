import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "./metrics";

export const globalStyles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: screenWidth * 0.074,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "Montserrat-Regular",
  },
  boldText: {
    fontFamily: "Montserrat-SemiBold",
  },
  ExtraboldText: {
    fontFamily: "Montserrat-Bold",
  },
});
