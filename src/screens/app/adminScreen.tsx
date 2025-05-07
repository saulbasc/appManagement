/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdminButtonsPanel from '../../components/components/admin/AdminButtonsPanel';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { Context as UserContext } from '../../context/UserDaoContext';
import { GetID } from '../../core/supabaseActions';
import { navigate } from '../../navigationRef';
import AdminCourseListComponent from '../../components/components/admin/AdminCourseListComponent';
import LoadingIndicator from '../../components/components/common/LoadingIndicator';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

function AdminScreen() {
  const { state: courseState, selectAll: courseSelectAll } = useContext(CourseContext);

  const [loaded, setLoaded] = useState(false);

  const {
    state: userState,
    select: userSelect,
  } = useContext(UserContext);

  useEffect(() => {
    const GetUSerID = async () => {
      const userId = await GetID();
      if (userId) {
        await courseSelectAll();
        await userSelect(userId);
        setLoaded(true);
      }
    };
    GetUSerID();
  }, [courseState.courses]);

  if (!loaded) {
    return <LoadingIndicator />;
  }

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
      <AdminCourseListComponent
        courses={courseState.courses}
        onPress={(course: any) => {
          navigate('AdminEdit', { course, user: userState.user });
        }}
      />
    </View>
  );
}

export default AdminScreen;
