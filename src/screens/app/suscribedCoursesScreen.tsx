import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { Context as UserContext } from '../../context/UserDaoContext';
import CourseListComponent from '../../components/components/courses/CourseListComponent';
import { GetID } from '../../core/supabaseActions';
import { navigate } from '../../navigationRef';
import LoadingIndicator from '../../components/components/common/LoadingIndicator';

const styles = StyleSheet.create({
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 17,
  },
});

function SuscribedCoursesScreen() {
  const { state: courseState, selectAllWithID: courseSelectAllWithID } = useContext(CourseContext);
  const { state: userState, select: userSelect } = useContext(UserContext);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const GetUserID = async () => {
      const id = await GetID();
      if (id) {
        await userSelect(id);
        await courseSelectAllWithID(id);
        setLoaded(true);
      }
    };
    GetUserID();
  }, [courseState.selectedCourses]);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  if (courseState.selectedCourses.length > 0) {
    return (
      <CourseListComponent
        courses={courseState.selectedCourses}
        onPress={(course: any) => {
          navigate('CourseDetail', { course, user: userState.user });
        }}
      />
    );
  }
  return <Text style={styles.notFoundText}>No te has suscrito a ningún curso</Text>;
}

export default SuscribedCoursesScreen;
