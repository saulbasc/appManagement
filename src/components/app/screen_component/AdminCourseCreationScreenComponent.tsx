import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@rneui/base';
import CourseForm from '../courses/CourseForm';
import tr from '../../../manager/TranslationManager';
import AppColors from '../../../util/globalColors';

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
  return (
    <View style={styles.content}>
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
      <Button
        buttonStyle={styles.button}
        title={tr('createCourse')}
        onPress={onPress}
      />
    </View>
  );
}

export default AdminCourseCreationScreenComponent;
