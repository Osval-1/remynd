import { StyleSheet, Text, View,Platform } from 'react-native'
import React ,{useState}from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Reminders from "../screens/Reminders";
import AddReminder from "../screens/AddReminder";
import EditProfile from "../screens/EditProfile";

export type RootStackParamList = {
    Register: undefined;
    Reminders: undefined;
    AddReminder:undefined;
    EditProfile:undefined;
  };

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} >
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
        {/* <RootStack.Screen
          name="Reminders"
          component={Reminders}
          options={{
            animation: Platform.OS === "ios" ? "fade" : "simple_push",
          }}
          /> */}
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
  )
}

export default Navigator

const styles = StyleSheet.create({})