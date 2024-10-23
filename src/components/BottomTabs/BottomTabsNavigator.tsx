import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import AddReminder from "@/screens/AddReminder";
import { RootStackParamList } from "App";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabel: "",
          tabBarStyle: {
            paddingVertical: 20,
            height: 60,
            backgroundColor: "#fff",
            margin: 0,
            borderColor: "transparent",
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarBackground: () => (
            <View>
              <LinearGradient
                colors={["transparent", "rgba(255,255,255,1)"]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 100,
                }}
              />
            </View>
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabComponent
                  icon={<Entypo name="plus" size={24} color="black" />}
                />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen name="AddReminder" component={AddReminder} />
      </Tab.Navigator>
    </>
  );
};
export default BottomTabs;

type TabProps = {
  icon: React.ReactNode;
};
export const TabComponent = ({ icon }: TabProps) => {
  return <View>{icon}</View>;
};

const styles = StyleSheet.create({});
