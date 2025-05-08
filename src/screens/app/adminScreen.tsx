/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { Context as UserContext } from '../../context/UserDaoContext';
import { GetID } from '../../core/supabaseActions';
import { navigate } from '../../navigationRef';
import LoadingIndicator from '../../components/app/common/LoadingIndicator';
import AdminScreenComponent from '../../components/app/screen_component/AdminScreenComponent';
import Course from '../../types/Course';

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
  }, []);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <AdminScreenComponent
      courses={courseState.courses}
      onPressAdd={() => {
        navigate('AdminCreation');
      }}
      onPressStats={() => {
        navigate('AdminStats');
      }}
      onPressEdit={(course: Course) => {
        navigate('AdminEdit', { course, user: userState.user });
      }}
    />
  );
}

export default AdminScreen;
