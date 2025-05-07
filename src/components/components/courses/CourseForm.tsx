import { Button, Input } from '@rneui/base';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppColors from '../../../util/globalColors';
import tr from '../../../manager/TranslationManager';
import { MediumSpacer } from '../../util/Spacer';
import Course from '../../../types/Course';
import { Context as CourseContext } from '../../../context/CourseDaoContext';

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

function CourseForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [instructor, setInstructor] = useState('');

  const { insert: insertCourse, selectAll } = useContext(CourseContext);

  return (
    <View>
      <View style={styles.inputsContent}>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
          style={styles.input}
          label={tr('title')}
          labelStyle={{ marginBottom: 10 }}
          onChangeText={setTitle}
        />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
          style={styles.input}
          label={tr('category')}
          labelStyle={{ marginBottom: 10 }}
          onChangeText={setCategory}
        />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
          style={styles.input}
          label={tr('description')}
          labelStyle={{ marginBottom: 10 }}
          multiline
          onChangeText={setDescription}
        />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
          style={styles.input}
          label={tr('duration')}
          labelStyle={{ marginBottom: 10 }}
          onChangeText={(text) => {
            if (!Number.isNaN(text)) {
              const num: number = parseInt(text, 10);
              setDuration(num);
            }
          }}
          keyboardType="numeric"
        />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
          style={styles.input}
          label={tr('instructor')}
          labelStyle={{ marginBottom: 10 }}
          onChangeText={setInstructor}
        />
      </View>
      <MediumSpacer />
      <View>
        <Button
          title={tr('createCourse')}
          buttonStyle={styles.button}
          onPress={async () => {
            const course = new Course(
              0,
              title,
              description,
              category,
              duration,
              instructor,
              new Date(),
            );
            await insertCourse(course);
            await selectAll();
          }}
        />
      </View>
    </View>
  );
}

export default CourseForm;
