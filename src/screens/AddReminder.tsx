import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import BasicInput from "../../src/components/BasicInput/BasicInput";
import SelectInput from "../../src/components/SelectInput/SelectInput";
import DateTimeInput from "../../src/components/DateTimeInput/DateTimeInput";

type Props = NativeStackScreenProps<RootStackParamList, "AddReminder">;

const AddReminder = ({ route, navigation }: Props) => {
  return (
    <View style={{ ...globalStyles.container }}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} delayPressIn={50} onPress={navigation.goBack}>
        <MaterialIcons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Montserrat-Bold" }}>AddReminder</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerHeader}>
            Make Your Own Reminder
          </Text>
          <View>
            <Text>Title</Text>
          </View>
          <BasicInput inputHeight={2} placeholder="Insert Title" />
          <View>
            <Text>Category</Text>
          </View>
          <SelectInput label="Select Category" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 15,
              gap: 50,
            }}
          >
            <View style={{ justifyContent: "flex-start" }}>
              <View>
                <Text>Time</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <DateTimeInput label="00" />
                <Text>:</Text>
                <DateTimeInput label="00" />
              </View>
            </View>
            <View>
              <View>
                <Text>Calender</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <DateTimeInput label="dd" />
                <Text>:</Text>
                <DateTimeInput label="mm" />
                <Text>:</Text>
                <DateTimeInput label="yyyy" />
              </View>
            </View>
          </View>
          <View>
            <Text>Repeat</Text>
          </View>
          <SelectInput label="Once" />
        </View>
      </View>
    </View>
  );
};

export default AddReminder;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  inputContainer: {
    width: "90%",
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    padding: 20,
    borderRadius: 15,
    marginBottom: "25%",
  },
  inputContainerHeader: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "blue",
    borderRadius: 35,
    position: "relative",
    top: -35,
    textAlign: "center",
    color: "#fff",
  },
});
