import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import Settings from "@/screens/Settings";
import { RootStackParamList } from "App";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Icon } from "@/utils/custom_icons";
import AddReminder from "@/screens/AddReminder";
import { styles } from "./styles";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabel: "",
          tabBarStyle: styles.containerStyle,
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarBackground: () => (
            <View>
              <LinearGradient
                colors={["transparent", "rgba(255,255,255,1)"]}
                style={styles.gradient}
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
                  icon={
                    <Icon
                      name="dashboard-fill-1"
                      size={24}
                      color={focused ? "#3FBDF1" : "#9B9B9B"}
                      style={{
                        backgroundColor: focused
                          ? "rgba(63, 189, 241,0.2)"
                          : "#fff",
                        padding: 10,
                        borderRadius: 14,
                      }}
                    />
                  }
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="AddReminder"
          component={AddReminder}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabComponent
                  icon={
                    <View style={styles.addReminderIcon}>
                      <Entypo name="plus" size={24} color="#fff" style={{}} />
                    </View>
                  }
                />
              );
            },
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabComponent
                  icon={
                    <Ionicons
                      name="settings-sharp"
                      size={24}
                      color={focused ? "#3FBDF1" : "#9B9B9B"}
                      style={{
                        backgroundColor: focused
                          ? "rgba(63, 189, 241,0.2)"
                          : "#fff",
                        padding: 10,
                        borderRadius: 14,
                      }}
                    />
                  }
                />
              );
            },
          }}
        />
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
