import { StyleSheet } from "react-native";
import { lightTheme } from "@/styles/theme";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3FBDF1",
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    ...typography.header,
    color: "#fff",
  },
});
