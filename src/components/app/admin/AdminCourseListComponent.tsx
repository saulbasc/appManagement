import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SearchBar from "../../bar/SearchBar";
import { Context as CourseContext } from "../../../context/CourseDaoContext";
import AppColors from "../../../util/globalColors";
import AdminCourseListPanel from "./AdminCourseListPanel";
import LoadingIndicator from "../common/LoadingIndicator";
import Course from "../../../types/Course";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: AppColors.white,
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 30
  }
});

function AdminCourseListComponent({ courses, onPress }: any) {
  const { selectAll } = useContext(CourseContext);
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const GetCourses = async () => {
      await selectAll();
      setLoaded(true);
    };
    GetCourses();
  }, []);

  const filteredCourses = courses?.filter(
    (course: Course) =>
      course.title.toLowerCase().includes(text.toLocaleLowerCase()) ||
      course.instructor.toLowerCase().includes(text.toLocaleLowerCase()) ||
      course.category.toLowerCase().includes(text.toLocaleLowerCase()),
  );

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.view}>
      <SearchBar value={text} onChangeText={setText} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCourses ?? []}
        renderItem={({ item }) => (
          <AdminCourseListPanel onPress={() => onPress(item)} item={item} />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

export default AdminCourseListComponent;
