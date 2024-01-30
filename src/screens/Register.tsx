import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { globalStyles } from "../styles/global";
import Button from "../../src/components/Button/Button";
import BasicInput from "../../src/components/BasicInput/BasicInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const Register = ({ route, navigation }: Props) => {
  const [authScreen, setAuthScreen] = useState("Register");
  return (
    <View style={globalStyles.container}>
      <Text style={{ textAlign: "center", marginTop: 50 }}>Register</Text>
      <View style={styles.cardView}>
        <Text style={{ textAlign: "center" }}>Register</Text>
        <View style={styles.buttonView}>
          <Button
            outlined={true}
            label="Register"
            active={authScreen === "Register" ? true : false}
            onPress={() => setAuthScreen("Register")}
          />
          <Button
            label="Login"
            outlined={true}
            active={authScreen === "Login" ? true : false}
            onPress={() => setAuthScreen("Login")}
          />
        </View>
        {authScreen === "Register" ? (
          <>
            <View style={styles.inputView}>
              <BasicInput placeholder="Email Address" />
              <BasicInput placeholder="Enter password" />
              <BasicInput placeholder="Confirm password" />
            </View>
            <Button label="Register" onPress={()=>console.log("Register")} />
          </>
        ) : (
          <>
            <View style={styles.inputView}>
              <BasicInput placeholder="Email Address" />
              <BasicInput placeholder="Password" />
            </View>
            <Button label="Login" onPress={()=>console.log("login")} />
          </>
        )}
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  cardView: {
    marginTop: 90,
    padding: 20,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    elevation: 30,
    borderRadius: 15,
    shadowColor: "#000",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputView: {
    alignItems: "center",
    marginBottom: 20,
  },
});
