/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Text } from "@rneui/base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { MediumSpacer, SmallSpacer } from "../../util/Spacer";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.secondary,
    borderColor: AppColors.primary,
    borderRightWidth: 0,
    borderRadius: 20,
    marginVertical: 15,
    padding: 15,
    elevation: 5,
  },
  rowView: {
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "bold",
    borderBottomColor: AppColors.quaternary,
    borderBottomWidth: 1,
    color: AppColors.quaternary,
  },
  category: {
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    color: AppColors.quaternary,
  },
  right: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: AppColors.tertiary,
  }
});

function CourseListPanel({ item, onPressCourse }: any) {
  return (
    <TouchableOpacity 
      onPress={onPressCourse} 
      activeOpacity={0.8}
    >
      <LinearGradient
       colors={[AppColors.secondary, AppColors.white]}
       style={styles.container}
       end={{ x: 1, y:0}}
      >
        <Text style={styles.title}>{item.title}</Text>
        <MediumSpacer />
        <View style={styles.rowView}>
          <MaterialCommunityIcons
            name="google-classroom"
            size={30}
            color={AppColors.quaternary}
          />
          <Text style={[styles.category, styles.text]}>{item.category}</Text>
        </View>
        <SmallSpacer />
        <View style={styles.rowView}>
          <FontAwesome5
            name="chalkboard-teacher"
            size={24}
            color={AppColors.quaternary}
          />
          <Text style={styles.text}>{item.instructor}</Text>
        </View>
        <View style={styles.right} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default CourseListPanel;
