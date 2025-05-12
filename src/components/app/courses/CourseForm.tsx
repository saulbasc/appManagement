import React from "react";
import { View, StyleSheet } from "react-native";
import AppColors from "../../../util/globalColors";
import useTr from "../../../manager/TranslationManager";
import { MediumSpacer } from "../../util/Spacer";
import DefaultTextInput from "../common/DefaultTextInput";
import DefaultNumberInput from "../common/DefaultNumberInput";

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
      />
      <DefaultTextInput
        value={categoryValue}
        onChangeText={setCategory}
        multiline={false}
        label={tr("category")}
      />
      <DefaultTextInput
        value={descriptionValue}
        onChangeText={setDescription}
        multiline
        label={tr("description")}
      />
      <DefaultNumberInput
        value={durationValue.toString()}
        onChangeText={setDuration}
        label={tr("duration")}
      />
      <DefaultTextInput
        value={instructorValue}
        onChangeText={setInstructor}
        multiline={false}
        label={tr("instructor")}
      />
      <MediumSpacer />
    </View>
  );
}

export default CourseForm;
