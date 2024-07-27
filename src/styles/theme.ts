import { Theme } from "@react-navigation/native";

export type CustomTheme = Theme & {
  colors: Record<"focus", "warning", string>;
};
export type ColorNames = keyof Theme["colors"];

// enum Colors {
//   black = "#000000",
//   darkGrey = "#2A2A2A",
//   midGrey = "#6C6C6C",
//   lightGrey = "#EDEDED",
//   blue = "#2541FC",
//   coral = "#FF4A6E",
//   pink = "#DE00A5",
//   lightPink = "#E28FC7",
//   red = "#FF0000",
//   white = "#FFFFFF",
// }

// export const darkTheme: CustomTheme = {
//   dark: true,
//   colors: {},
// };
// export const lightTheme: CustomTheme = {
//   dark: false,
//   colors: {},
// };
