import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "./metrics";

export const typography = StyleSheet.create({
  h1: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 28,
    lineHeight: 38,
  },
  h2: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    lineHeight: 24,
  },
  header: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
    lineHeight: 38,
  },
  Title: {
    fontFamily: "Montserrat-Bold",
  },
  body: {
    fontFamily: "Montserrat-Bold",
  },
});
