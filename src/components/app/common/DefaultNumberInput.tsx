/* eslint-disable no-unused-vars */
import { Input, IconNode } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: AppColors.white,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    width: 80,
  }
});

type DefaultInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  rightIcon?: IconNode,
};

function DefaultNumberInput({
  value,
  onChangeText,
  label,
  rightIcon
}: Readonly<DefaultInputProps>) {
  return (
    <Input
      inputContainerStyle={styles.inputContainer}
      leftIconContainerStyle={{ marginRight: 15 }}
      rightIcon={rightIcon}
      style={styles.input}
      label={label}
      inputMode="numeric"
      labelStyle={{ marginBottom: 10, color: AppColors.black }}
      value={value}
      onChangeText={(text: string) => onChangeText(text)}
    />
  );
}

export default DefaultNumberInput;
