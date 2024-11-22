import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "@/components/Navigator";
import { lightTheme } from "@/styles/theme";
import { useColorScheme } from "react-native";

export type RootStackParamList = {
  AddReminder: undefined;
  Home: undefined;
  Settings: undefined;
};
let darkTheme: any;
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (!fontsLoaded) return;
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const colorScheme = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    IcoMoon: require("./assets/fonts/icomoon.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme == "dark" ? darkTheme : lightTheme}
        onReady={onLayoutRootView}>
        <Navigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
