import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@rneui/base';
import CourseForm from '../courses/CourseForm';
import tr from '../../../manager/TranslationManager';
import { SmallSpacer } from '../../util/Spacer';
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
        title={tr('editCourse')}
        onPress={onEditPress}
      />
      <SmallSpacer />
      <Button
        buttonStyle={styles.button}
        title={tr('deleteCourse')}
        onPress={onDeletePress}
      />
    </View>
  );
}

export default AdminCourseEditScreenComponent;
