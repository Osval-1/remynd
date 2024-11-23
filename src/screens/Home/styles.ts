import { StyleSheet } from "react-native";
import { typography } from "@/styles/typography";
import { screenWidth, screenHeight } from "@/styles/metrics";
import { globalStyles } from "@/styles/global";

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    // paddingTop: 15,
  },
  bannerContainer: {
    marginTop: 36,
  },
  header: {
    ...typography.h1,
  },
  bottomHeader: {
    ...typography.h1,
    fontFamily: "Poppins-Regular",
  },
  banner: {
    justifyContent: "space-between",
    backgroundColor: "#F3F6C8",
    height: screenHeight * 0.22,
    borderRadius: 28,
    marginTop: 16,
  },
  imageStyle: {
    position: "absolute",
    top: -80,
    right: -30,
    width: 245,
    height: 251,
    resizeMode: "contain",
  },
  bannerTextContainer: {
    paddingTop: 24,
    paddingLeft: 24,
  },
  bannerGreyText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    lineHeight: 24,
    color: "#9B9B9B",
  },
  bannerRedTextContainer: {
    paddingLeft: 24,
    paddingBottom: 24,
  },
  bannerRedText: {
    fontFamily: "Poppins-Semibold",
    fontSize: 13,
    lineHeight: 24,
    color: "#EC7669",
  },
  underline: {
    borderBottomWidth: 4,
    paddingBottom: 4,
    borderBottomColor: "#EC7669",
    width: 78,
  },
  reminderHeader: {
    ...typography.header,
    marginTop: 20,
  },
});
