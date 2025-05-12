import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import CourseForm from "../courses/CourseForm";
import AppColors from "../../../util/globalColors";
import useTr from "../../../manager/TranslationManager";
import { MediumSpacer } from "../../util/Spacer";

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: AppColors.quaternary,
    height: 50,
    borderRadius: 7,
  },
});

function AdminCourseCreationScreenComponent({
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
  onPress,
}: any) {
  const tr = useTr();
  return (
    <ScrollView style={styles.content}>
      <CourseForm
        titleValue={titleValue}
        categoryValue={categoryValue}
        descriptionValue={descriptionValue}
        durationValue={durationValue}
        instructorValue={instructorValue}
        setTitle={setTitle}
        setCategory={setCategory}
        setDescription={setDescription}
        setDuration={setDuration}
        setInstructor={setInstructor}
      />
      <MediumSpacer />
      <Button
        buttonStyle={styles.button}
        title={tr("createCourse")}
        onPress={onPress}
      />
      <MediumSpacer />
    </ScrollView>
  );
}

export default AdminCourseCreationScreenComponent;
