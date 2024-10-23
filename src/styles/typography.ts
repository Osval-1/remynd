import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "./metrics";

export const typography = StyleSheet.create({
  h1: {
    fontFamily: "Poppins-Semibold",
    fontSize: 28,
    lineHeight: 38,
  },
  h2: {
    fontFamily: "Poppins-Semibold",
    fontSize: 18,
    lineHeight: 24,
  },
  header: {
    fontFamily: "Poppins-Medium",
    fontSize: 17,
    lineHeight: 38,
  },
  taskHeader: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    lineHeight: 38,
  },
  Title: {
    fontFamily: "Montserrat-Bold",
  },
  body: {
    fontFamily: "Montserrat-Bold",
  },
});
