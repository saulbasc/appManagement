/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { SmallSpacer } from "../../util/Spacer";
import AppColors from "../../../util/globalColors";
import PressAnimation from "../../../animations/PressAnimation";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
  },
  courseContent: {
    backgroundColor: AppColors.white,
    borderRadius: 10,
    marginVertical: 15,
    padding: 15,
    elevation: 4
  },
  rowView: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    borderBottomColor: AppColors.black,
    borderBottomWidth: 0,
    color: AppColors.black,
  },
  category: {
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    color: AppColors.black,
  },
  delete: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

function AdminCourseListPanel({ item, onPress }: any) {
  return (
    <PressAnimation 
      onPress={onPress} 
    >
      <LinearGradient
       colors={[AppColors.white, AppColors.white]}
       style={styles.courseContent}
       end={{ x: 1, y:0}}
      >
        <Text style={styles.title}>{item.title}</Text>
        <SmallSpacer />
        <View style={styles.rowView}>
          <FontAwesome5
            name="chalkboard-teacher"
            size={20}
            color={AppColors.quaternary}
          />
          <Text style={styles.text}>{item.instructor}</Text>
        </View>
      </LinearGradient>
    </PressAnimation>
  );
}

export default AdminCourseListPanel;
