/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AdminButtonsPanel from '../../components/components/AdminButtonsPanel';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { Context as UserContext } from '../../context/UserDaoContext';
import { GetID } from '../../core/supabaseActions';
import CourseListComponent from '../../components/components/CourseListComponent';
import { navigate } from '../../navigationRef';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

function AdminScreen() {
  const { state: courseState, selectAll: courseSelectAll } = useContext(CourseContext);

  const {
    state: userState,
    select: userSelect,
  } = useContext(UserContext);

  useEffect(() => {
    const GetUSerID = async () => {
      const userId = await GetID();
      if (userId) {
        courseSelectAll();
        userSelect(userId);
      }
    };
    GetUSerID();
  }, []);

  return (
    <View style={styles.content}>
      <AdminButtonsPanel
        onPressAdd={() => {
          navigate('AdminCreation');
        }}
        onPressStats={() => {
          navigate('AdminStats');
        }}
      />
      <CourseListComponent
        courses={courseState.courses}
        onPress={async (course: any) => {
          navigate('CourseDetail', { course, user: userState.user });
        }}
      />
    </View>
  );
}

export default AdminScreen;
