import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reminders from "../screens/Reminders";
import EditProfile from "../screens/EditProfile";
import Home from "@/screens/Home";
import BottomTabs from "./BottomTabs";
import AddReminder from "@/screens/AddReminder";
import Settings from "@/screens/Settings";

export type RootStackParamList = {
  AddReminder: undefined;
  Home: undefined;
  BottomTabs: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="AddReminder"
        component={AddReminder}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
        }}
      />
    </RootStack.Navigator>
  );
};

export default Navigator;
