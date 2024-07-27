import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

type AppProps = {
  label: string;
  outlined?: boolean;
  width?: string | number;
  active?: boolean;
  onPress: (...args: any) => void;
};

const Button = ({
  label,
  outlined = false,
  active = true,
  onPress,
}: AppProps) => {
  return (
    <>
      {outlined ? (
        <TouchableOpacity
          style={{
            backgroundColor: active ? "#005C97" : "#fff",
            paddingVertical: 8,
            width: 120,
            borderRadius: 5,
            borderWidth: active ? 0 : 1,
            marginVertical: 10,
          }}
          activeOpacity={0.5}
          onPress={onPress}>
          <Text
            style={{
              color: active ? "#fff" : "#000",
              textAlign: "center",
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#0066CC",
            paddingVertical: 8,
            borderRadius: 5,
            marginVertical: 10,
          }}
          activeOpacity={0.5}
          onPress={onPress}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {},
});
