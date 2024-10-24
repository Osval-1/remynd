import { addImageToPlant } from "services/plant";
import { StyleSheet } from "react-native";
import { typography } from "@/styles/typography";
import { screenWidth, screenHeight } from "@/styles/metrics";
import { globalStyles } from "@/styles/global";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  inputContainer: {
    width: "90%",
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    padding: 20,
    borderRadius: 15,
  },
  inputContainerHeader: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#0397FF",
    borderRadius: 35,
    position: "relative",
    top: -35,
    textAlign: "center",
    color: "#fff",
  },
  returnButton: {
    backgroundColor: "#F8F8F6",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    marginBottom: 32,
  },
  taskNameContainer: {
    marginTop: 12,
    marginBottom: 20,
  },
  taskNameInputContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F8F6",
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 14,
  },
  date$timeText: {
    fontFamily: "Poppins-Medium",
    lineHeight: 38,
    fontSize: 13,
  },
  date$timeContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F8F6",
    width: screenWidth * 0.4,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "space-between",
  },
  date$timeLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  date$timeRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  weekDayContainer:{
    backgroundColor: "#F8F8F6",
    borderRadius: 100,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  weekDayText:{
    fontFamily: "Poppins-Semibold",
    fontSize: 24,
  },
});
