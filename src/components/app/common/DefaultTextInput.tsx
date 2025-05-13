/* eslint-disable no-unused-vars */
import { Input, IconNode } from "@rneui/base";
import React, { useState } from "react";
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
    backgroundColor: AppColors.white,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

type DefaultInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  multiline: boolean;
  label: string;
  rightIcon?: IconNode;
};

function DefaultTextInput({
  value,
  onChangeText,
  multiline,
  label,
  rightIcon,
}: Readonly<DefaultInputProps>) {
  const [inputHeight, setInputHeight] = useState(0);

  return (
    <Input
      inputContainerStyle={{ borderBottomWidth: 1 }}
      leftIconContainerStyle={{ marginRight: 15 }}
      rightIcon={rightIcon}
      style={[styles.input, { height: inputHeight, fontSize: 15 }]}
      label={label}
      labelStyle={{ marginBottom: 10, color: AppColors.black }}
      onChangeText={(text: string) => onChangeText(text)}
      value={value}
      multiline={multiline}
      onContentSizeChange={(e) => {
        const inputH = Math.max(e.nativeEvent.contentSize.height, 35);
        setInputHeight(inputH);
      }}
    />
  );
}

export default DefaultTextInput;
