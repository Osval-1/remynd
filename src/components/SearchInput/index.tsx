import { Text, View, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="#9B9B9B" />
      <TextInput placeholder="Search Here" placeholderTextColor={"#9B9B9B"} />
    </View>
  );
};

export default SearchInput;
