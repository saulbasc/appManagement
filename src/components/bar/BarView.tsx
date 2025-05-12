/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import BarDropDown from "./BarDropDown";
import { navigate } from "../../navigationRef";
import { LogOut } from "../../core/supabaseActions";
import AppColors from "../../util/globalColors";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    backgroundColor: AppColors.white,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: AppColors.quaternary,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function BarView() {
  return (
    <View style={styles.content}>
      <BarDropDown />
      <TouchableOpacity
        onPress={() => {
          navigate("Signin");
          LogOut();
        }}
      >
        <MaterialIcons name="logout" size={35} color={AppColors.quaternary} />
      </TouchableOpacity>
    </View>
  );
}

export default BarView;
