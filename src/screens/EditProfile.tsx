import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { globalStyles } from "../styles/global";
import { Entypo } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "EditProfile">;

const EditProfile = ({ route, navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} onPress={navigation.goBack}>
          <Entypo
            name="chevron-left"
            size={30}
            color="black"
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", width: "90%", fontSize: 20 }}>
          Edit Profile
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          borderWidth: 1,
          borderColor: "#EFEDED",
          borderRadius: 5,
        }}>
        <TouchableOpacity activeOpacity={0.6} style={styles.tile}>
          <View>
            <Text style={styles.upperText}>User Name:</Text>
            <Text>Anye Hansen</Text>
          </View>
          <Entypo name="chevron-right" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.tile}>
          <View>
            <Text style={styles.upperText}>E-mail:</Text>
            <Text>AnyeHansen@outlook.com</Text>
          </View>
          <Entypo name="chevron-right" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.tile}>
          <View>
            <Text style={styles.upperText}>Password:</Text>
            <Text>********</Text>
          </View>
          <Entypo name="chevron-right" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
  },
  backButton: {
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "blue",
    borderRadius: 999,
  },
  tile: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  upperText: {
    fontSize: 18,
    marginBottom: 5,
  },
});
