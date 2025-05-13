/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { SmallSpacer } from "../../util/Spacer";
import AppColors from "../../../util/globalColors";
import PressAnimation from "../../../animations/PressAnimation";

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.primary,
    borderRightWidth: 0,
    borderRadius: 15,
    marginVertical: 15,
    padding: 15,
    elevation: 4,
  },
  rowView: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    borderBottomColor: AppColors.black,
    color: AppColors.black,
    marginBottom: 20,
  },
  category: {
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    color: AppColors.black,
  },
  right: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: AppColors.black,
  }
});

function CourseListPanel({ item, onPressCourse }: any) {

   return (
    <PressAnimation
      onPress={onPressCourse}
    >
      <LinearGradient
        colors={[AppColors.white, AppColors.white]}
        style={styles.container}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.rowView}>
          <MaterialCommunityIcons
            name="google-classroom"
            size={25}
            color={AppColors.black}
          />
          <Text style={[styles.category, styles.text]}>{item.category}</Text>
        </View>
        <SmallSpacer />
        <View style={styles.rowView}>
          <FontAwesome5
            name="chalkboard-teacher"
            size={20}
            color={AppColors.black}
          />
          <Text style={styles.text}>{item.instructor}</Text>
        </View>
      </LinearGradient>
    </PressAnimation>
  );
}

export default CourseListPanel;
