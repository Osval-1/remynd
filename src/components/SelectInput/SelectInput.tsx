import { StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

type AppProps = {
  label: string;
  selectedOption?: string;
  error?: string;
};
const SelectInput = ({ label, selectedOption }: AppProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F0F0F0",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop:10
      }}
    >
      <Text style={{color:"#898686"}}>{label}</Text>
      <Entypo name="chevron-down" size={24} color="#898686" />
    </TouchableOpacity>
  );
};

export default SelectInput;

const styles = StyleSheet.create({});
