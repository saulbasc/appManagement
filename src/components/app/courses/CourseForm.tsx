/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { View, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AppColors from "../../../util/globalColors";
import useTr from "../../../manager/TranslationManager";
import { SmallSpacer } from "../../util/Spacer";
import DefaultTextInput from "../common/DefaultTextInput";
import DefaultNumberInput from "../common/DefaultNumberInput";

const styles = StyleSheet.create({
  inputsContent: {
    backgroundColor: AppColors.white,
    borderRadius: 15,
    paddingVertical: 20,
    paddingLeft: 5,
    borderColor: AppColors.quaternary,
    elevation: 5,
  },
  input: {
    height: 50,
    backgroundColor: AppColors.white,
    borderRadius: 7,
  },
  button: {
    height: 50,
    backgroundColor: AppColors.primary,
    borderRadius: 5,
  },
});

function CourseForm({
  titleValue,
  categoryValue,
  descriptionValue,
  durationValue,
  instructorValue,
  setTitle,
  setCategory,
  setDescription,
  setDuration,
  setInstructor,
}: any) {
  const tr = useTr();
  return (
    <View style={styles.inputsContent}>
      <DefaultTextInput
        value={titleValue}
        onChangeText={setTitle}
        multiline={false}
        label={tr("title")}
        rightIcon={<AntDesign name="edit" size={24} color="black" />}
      />
      <DefaultTextInput
        value={categoryValue}
        onChangeText={setCategory}
        multiline={false}
        label={tr("category")}
        rightIcon={<AntDesign name="edit" size={24} color="black" />}
      />
      <DefaultTextInput
        value={descriptionValue}
        onChangeText={setDescription}
        multiline
        label={tr("description")}
        rightIcon={<AntDesign name="edit" size={24} color="black" />}
      />
      <DefaultNumberInput
        value={durationValue.toString()}
        onChangeText={setDuration}
        label={tr("duration")}
        rightIcon={<AntDesign name="edit" size={24} color="black" />}
      />
      <DefaultTextInput
        value={instructorValue}
        onChangeText={setInstructor}
        multiline={false}
        label={tr("instructor")}
        rightIcon={<AntDesign name="edit" size={24} color="black" />}
      />
      <SmallSpacer />
    </View>
  );
}

export default CourseForm;
