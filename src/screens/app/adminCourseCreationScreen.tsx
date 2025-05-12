import React, { useContext, useState } from "react";
import Course from "../../types/Course";
import { Context as CourseContext } from "../../context/CourseDaoContext";
import AdminCourseCreationScreenComponent from "../../components/app/screen_component/AdminCourseCreationScreenComponent";
import { goBack } from "../../navigationRef";

function AdminCourseCreationScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [instructor, setInstructor] = useState("");

  const { insert: insertCourse, selectAll } = useContext(CourseContext);

  return (
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
  );
}

export default AdminCourseCreationScreen;
