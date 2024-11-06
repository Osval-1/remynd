import { Text, View, TouchableOpacity, Pressable, Switch } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { globalStyles } from "@/styles/global";
import { styles } from "./styles";
import { typography } from "@/styles/typography";
import { Icon } from "@/utils/custom_icons";
import SwitchToggle from "react-native-switch-toggle";

type TileProps = {
  tileName: string;
  subText: string;
  toogle?: boolean;
  icon: string;
};
const Tile = ({ tileName, subText, toogle, icon }: TileProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Pressable style={styles.tile}>
      <View style={styles.tileRightContainer}>
        <Icon name={icon} size={24} color={"#C1C7D0"} />
        <View>
          <Text style={styles.tileHeader}>{tileName}</Text>
          <Text style={typography.subText}>{subText}</Text>
        </View>
      </View>
      {toogle ? (
        <SwitchToggle
          switchOn={isEnabled}
          onPress={() => setIsEnabled(!isEnabled)}
          circleColorOff="#FFF"
          circleColorOn="#FFF"
          backgroundColorOn="#3FBDF1"
          backgroundColorOff="#C1C7D0"
          containerStyle={styles.switchContainerStyle}
          circleStyle={styles.switchCircle}
        />
      ) : (
        <Icon name={"arrow-right-s-line-2"} size={24} color={"#C1C7D0"} />
      )}
    </Pressable>
  );
};

export default Tile;
