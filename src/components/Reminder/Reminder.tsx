import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { reminderModel } from "@/types/reminder";
import { globalStyles } from "@/styles/global";
import Entypo from "@expo/vector-icons/Entypo";
import { styles as style } from "./styles";
import { typography } from "@/styles/typography";

interface reminderCompModel extends reminderModel {
  onDelete?: () => void;
  onUpdate?: () => void;
}

// const Reminder = ({ title, body, alertTime, onDelete }: reminderCompModel) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.body}>{body}</Text>
//       <Text style={styles.alertTime}>{alertTime}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         activeOpacity={0.6}
//         delayPressIn={50}
//         onPress={onDelete}>
//         <AntDesign name="delete" size={24} color="black" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Reminder;

export const Reminder = () => {
  return (
    <Pressable style={style.reminderContainer}>
      <View style={style.icon$TextContainer}>
        <FontAwesome5 name="pills" size={25} color="grey" />
        <View style={style.reminderTextContainer}>
          <Text style={style.reminderText}>Oxycodone</Text>
          <View style={style.subTextContainer}>
            <Text style={typography.subText}>10:00 AM</Text>
            <View style={style.dot}></View>
            <Text style={typography.subText}>Completed</Text>
          </View>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color="grey" />
    </Pressable>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     margin: 10,
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     height: 100,
//     elevation: 2,
//     padding: 10,
//   },
//   title: {},
//   body: {},
//   alertTime: {},
//   deleteButton: {
//     marginLeft: 0,
//     padding: 5,
//   },
// });
