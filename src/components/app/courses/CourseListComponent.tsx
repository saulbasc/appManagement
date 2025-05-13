import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SearchBar from "../../bar/SearchBar";
import CourseListPanel from "./CourseListPanel";
import { Context as CourseContext } from "../../../context/CourseDaoContext";
import AppColors from "../../../util/globalColors";
import Course from "../../../types/Course";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: AppColors.white,
  },
    contentContainer: {
    paddingBottom: 40,
    paddingTop: 80
  }
});

function CourseListComponent({ courses, onPressCourse }: any) {
  const { resetCourse } = useContext(CourseContext);
  const [text, setText] = useState("");

  useEffect(() => {
    resetCourse();
  }, []);

  const filteredCourses = courses?.filter(
    (course: Course) =>
      course.title.toLowerCase().includes(text.toLocaleLowerCase()) ||
      course.instructor.toLowerCase().includes(text.toLocaleLowerCase()) ||
      course.category.toLowerCase().includes(text.toLocaleLowerCase()),
  );

  return (
    <View style={styles.view}>
      <SearchBar value={text} onChangeText={setText} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCourses ?? []}
        renderItem={({ item }) => (
          <CourseListPanel
            onPressCourse={() => onPressCourse(item)}
            item={item}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

export default CourseListComponent;
