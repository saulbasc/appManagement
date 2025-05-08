/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AdminButtonsPanel from '../admin/AdminButtonsPanel';
import AdminCourseListComponent from '../admin/AdminCourseListComponent';
import Course from '../../../types/Course';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

type AdminScreenProps = {
  onPressAdd: () => void;
  onPressStats: () => void;
  onPressEdit: (course: Course) => void;
  courses: Course[];
};

function AdminScreenComponent({
  onPressAdd,
  onPressStats,
  courses,
  onPressEdit,
}: Readonly<AdminScreenProps>) {
  return (
    <View style={styles.content}>
      <AdminButtonsPanel
        onPressAdd={onPressAdd}
        onPressStats={onPressStats}
      />
      <AdminCourseListComponent
        courses={courses}
        onPress={onPressEdit}
      />
    </View>
  );
}

export default AdminScreenComponent;
