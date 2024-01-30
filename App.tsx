import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform ,} from "react-native";
import react, { useState } from "react";
import Register from "./src/screens/Register";
import Reminders from "./src/screens/Reminders";
import AddReminder from "./src/screens/AddReminder";
import EditProfile from "./src/screens/EditProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";

export type RootStackParamList = {
  Register: undefined;
  Reminders: undefined;
  AddReminder:undefined;
  EditProfile:undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
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
              <RootStack.Screen
                name="AddReminder"
                component={AddReminder}
                options={{
                  animation: Platform.OS === "ios" ? "fade" : "simple_push",
                }}
                />
              <RootStack.Screen
                name="EditProfile"
                component={EditProfile}
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
