/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MediumSpacer, SmallSpacer } from "../util/Spacer";
import commonStyles from "../../styles/CommonStyles";
import AppColors from "../../util/globalColors";

const styles = StyleSheet.create({
  loginTitle: {
    color: AppColors.black,
    fontSize: 40,
  },
  loginText: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});

function LoginTitle({ title }: any) {
  return (
    <View style={commonStyles.centerTotal}>
      <MediumSpacer />
      <Ionicons name="school" size={100} color={AppColors.quaternary} />
      <SmallSpacer />
      <Text style={styles.loginTitle}>{title}</Text>
      <MediumSpacer />
    </View>
  );
}

export default LoginTitle;
