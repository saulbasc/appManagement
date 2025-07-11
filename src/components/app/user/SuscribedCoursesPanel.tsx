/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import useTr from "../../../manager/TranslationManager";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3
  },
  text: {
    fontSize: 20,
    color: AppColors.black,
    marginRight: 20,
  },
});

function SuscribedCoursesPanel({ onPress }: any) {
  const tr = useTr();
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.content}>
        <Text style={styles.text}>{tr("profileListButton")}</Text>
        <Feather name="arrow-right" size={35} color={AppColors.black} style={{ position: "absolute", right: 5}} />
      </View>
    </TouchableOpacity>
  );
}

export default SuscribedCoursesPanel;
