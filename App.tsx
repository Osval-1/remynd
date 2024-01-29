import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform ,} from "react-native";
import react, { useState } from "react";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Reminders from "./src/screens/Reminders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Reminders: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [authenticated, setauthenticated] = useState(false);
  const firstLogin  = true
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {!authenticated ? (
            <>
              <RootStack.Screen
                name="Register"
                component={Register}
                options={{
                  animation: Platform.OS === "ios" ? "fade" : "simple_push",
                }}
                />
              <RootStack.Screen
                name="Login"
                component={Login}
                options={{
                  animation: Platform.OS === "ios" ? "fade" : "simple_push",
                }}
                />
            </>
          ) : (
            <>
              <RootStack.Screen
                name="Reminders"
                component={Reminders}
                options={{
                  animation: Platform.OS === "ios" ? "fade" : "simple_push",
                }}
                />
            </>
          )}
        </RootStack.Navigator>
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
