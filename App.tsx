import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import react, { useState,useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context"
import Navigator from "./src/components/Navigator";
import { lightTheme,darkTheme } from "./src/styles/theme";
import { useColorScheme } from 'react-native';

export type RootStackParamList = {
  Register: undefined;
  Reminders: undefined;
  AddReminder:undefined;
  EditProfile:undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [authenticated, setAuthenticated] = useState(true);

  const colorScheme = useColorScheme()
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
    await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={colorScheme=="dark"?darkTheme:lightTheme}>
        <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
        <Navigator/>
        <StatusBar style="dark" />
          </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
