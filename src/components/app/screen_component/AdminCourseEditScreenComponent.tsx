import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import CourseForm from "../courses/CourseForm";
import { MediumSpacer, SmallSpacer } from "../../util/Spacer";
import AppColors from "../../../util/globalColors";
import useTr from "../../../manager/TranslationManager";

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: AppColors.primary,
    height: 50,
    borderRadius: 20,
  },
});

function AdminCourseEditScreenComponent({
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
  onEditPress,
  onDeletePress,
}: any) {
  const tr = useTr();
  return (
    <ScrollView contentContainerStyle={styles.content}>
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
        title={tr("editCourse")}
        onPress={onEditPress}
      />
      <SmallSpacer />
      <Button
        buttonStyle={styles.button}
        title={tr("deleteCourse")}
        onPress={onDeletePress}
      />
      <MediumSpacer />
    </ScrollView>
  );
}

export default AdminCourseEditScreenComponent;
