import React from 'react';
import { StyleSheet, View } from 'react-native';
import AdminButtonsPanel from './AdminButtonsPanel';
import AdminCourseListComponent from './AdminCourseListComponent';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

function AdminScreenPanel({
  onPressAdd,
  onPressStats,
  courses,
  onPressEdit,
}: any) {
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

export default AdminScreenPanel;
