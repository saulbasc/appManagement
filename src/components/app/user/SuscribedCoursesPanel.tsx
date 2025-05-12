/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import useTr from "../../../manager/TranslationManager";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    backgroundColor: AppColors.quaternary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: AppColors.white,
    marginRight: 20,
  },
});

function SuscribedCoursesPanel({ onPress }: any) {
  const tr = useTr();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{tr("profileListButton")}</Text>
        <Feather name="arrow-right" size={40} color={AppColors.white} />
      </View>
    </TouchableOpacity>
  );
}

export default SuscribedCoursesPanel;
