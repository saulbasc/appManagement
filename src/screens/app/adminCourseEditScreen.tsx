import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CourseForm from '../../components/components/courses/CourseForm';

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

function AdminCourseEditScreen({ course, user }: any) {
  useEffect(() => {
    console.log(course);
    console.log(user);
  });

  return (
    <View style={styles.content}>
      <CourseForm />
    </View>
  );
}

export default AdminCourseEditScreen;
