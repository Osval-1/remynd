import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reminders from "../screens/Reminders";
import AddReminder from "../screens/AddReminder";
import EditProfile from "../screens/EditProfile";
import Home from "@/screens/Home";

export type RootStackParamList = {
  Reminders: undefined;
  AddReminder: undefined;
  EditProfile: undefined;
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen
        name="Reminders"
        component={Reminders}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}
      /> */}
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}
      />
      {/* <RootStack.Screen
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
      /> */}
    </RootStack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
