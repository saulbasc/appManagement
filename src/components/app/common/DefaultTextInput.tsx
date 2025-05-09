/* eslint-disable no-unused-vars */
import { Input } from '@rneui/base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppColors from '../../../util/globalColors';

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
    borderRadius: 7,
  },
});

type DefaultInputProps = {
  value: string,
  onChangeText: (text: string) => void,
  multiline: boolean,
  label: string,
}

function DefaultTextInput({
  value,
  onChangeText,
  multiline,
  label,
}: Readonly<DefaultInputProps>) {
  const [inputHeight, setInputHeight] = useState(0);

  return (
    <Input
      inputContainerStyle={{ borderBottomWidth: 0 }}
      leftIconContainerStyle={{ marginRight: 15 }}
      style={[styles.input, { height: inputHeight }]}
      label={label}
      labelStyle={{ marginBottom: 10 }}
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
