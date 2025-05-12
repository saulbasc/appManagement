/* eslint-disable no-unused-vars */
import { Input } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  inputsContent: {
    backgroundColor: AppColors.secondary,
    borderRadius: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: AppColors.quaternary,
  },
  input: {
    height: 50,
    backgroundColor: AppColors.white,
    borderRadius: 7,
  },
});

type DefaultInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
};

function DefaultNumberInput({
  value,
  onChangeText,
  label,
}: Readonly<DefaultInputProps>) {
  return (
    <Input
      inputContainerStyle={{ borderBottomWidth: 0 }}
      leftIconContainerStyle={{ marginRight: 15 }}
      style={styles.input}
      label={label}
      inputMode="numeric"
      labelStyle={{ marginBottom: 10 }}
      value={value}
      onChangeText={(text: string) => onChangeText(text)}
    />
  );
}

export default DefaultNumberInput;
