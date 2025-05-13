import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Course from "../../types/Course";
import { Context as CourseContext } from "../../context/CourseDaoContext";
import AdminCourseCreationScreenComponent from "../../components/app/screen_component/AdminCourseCreationScreenComponent";
import { goBack } from "../../navigationRef";
import AppColors from "../../util/globalColors";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: AppColors.secondary,
    paddingHorizontal: 10,
  }
});

function AdminCourseCreationScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [instructor, setInstructor] = useState("");

  const { insert: insertCourse, selectAll } = useContext(CourseContext);

  return (
    <View style={styles.content}>
      <AdminCourseCreationScreenComponent
        titleValue={title}
        categoryValue={category}
        descriptionValue={description}
        durationValue={duration}
        instructorValue={instructor}
        setTitle={setTitle}
        setCategory={setCategory}
        setDescription={setDescription}
        setDuration={setDuration}
        setInstructor={setInstructor}
        onPress={async () => {
          const newCourse = new Course(
            0,
            title,
            description,
            category,
            duration,
            instructor,
            new Date(), 
          );
          goBack(); 
          await insertCourse(newCourse);
          await selectAll();
        }}
      />
    </View>
  );
}

export default AdminCourseCreationScreen;
