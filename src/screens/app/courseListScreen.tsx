import React, { useContext, useEffect } from "react";
import { navigate } from "../../navigationRef";
import { Context as CourseContext } from "../../context/CourseDaoContext";
import { Context as UserContext } from "../../context/UserDaoContext";
import CourseListComponent from "../../components/app/courses/CourseListComponent";
import { GetID } from "../../core/supabaseActions";

function CourseListScreen() {
  const { state: courseState, selectAll: courseSelectAll } =
    useContext(CourseContext);

  const { state: userState, select: userSelect } = useContext(UserContext);

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
    <CourseListComponent
      courses={courseState.courses}
      onPressCourse={async (course: any) => {
        navigate("CourseDetail", { course, user: userState.user });
      }}
    />
  );
}

export default CourseListScreen;
