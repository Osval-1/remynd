import { StyleSheet } from "react-native";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  header: {
    ...typography.h1,
  },
  bottomHeader: {
    ...typography.h1,
    fontFamily: "Montserrat-Regular",
  },
});
