import React, { useContext, useEffect, useState } from 'react';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { Context as UserContext } from '../../context/UserDaoContext';
import { GetID } from '../../core/supabaseActions';
import LoadingIndicator from '../../components/app/common/LoadingIndicator';
import SuscribedCoursesScreenComponent from '../../components/app/screen_component/SuscribedCoursesScreenComponent';
import { navigate } from '../../navigationRef';
import Course from '../../types/Course';

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
  }, []);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <SuscribedCoursesScreenComponent
      areCourses={courseState.selectedCourses.length > 0}
      selectedCourses={courseState.selectedCourses}
      onPressCourse={(course: Course) => {
        navigate('CourseDetail', { course, user: userState.user });
      }}
    />
  );
}

export default SuscribedCoursesScreen;
