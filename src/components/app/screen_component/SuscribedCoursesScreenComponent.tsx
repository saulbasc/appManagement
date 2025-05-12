/* eslint-disable no-unused-vars */
import React from "react";
import { StyleSheet, Text } from "react-native";
import CourseListComponent from "../courses/CourseListComponent";
import Course from "../../../types/Course";
import useTr from "../../../manager/TranslationManager";

const styles = StyleSheet.create({
  notFoundText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 17,
  },
});

type SuscribedCoursesProps = {
  areCourses: boolean;
  selectedCourses: Course[];
  onPressCourse: (course: Course) => void;
};

function SuscribedCoursesScreenComponent({
  areCourses,
  selectedCourses,
  onPressCourse,
}: Readonly<SuscribedCoursesProps>) {
  const tr = useTr();
  if (areCourses) {
    return (
      <CourseListComponent
        courses={selectedCourses}
        onPressCourse={onPressCourse}
      />
    );
  }
  return <Text style={styles.notFoundText}>{tr("notSuscribedInCourses")}</Text>;
}

export default SuscribedCoursesScreenComponent;
