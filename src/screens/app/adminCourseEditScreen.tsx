import React, { useContext, useEffect, useState } from 'react';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import Course from '../../types/Course';
import AdminCourseEditScreenComponent from '../../components/app/screen_component/AdminCourseEditScreenComponent';
import { goBack } from '../../navigationRef';

function AdminCourseEditScreen({ route }: any) {
  const { course } = route.params;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [instructor, setInstructor] = useState('');

  const { update: updateCourse, deleted: deleteCourse, selectAll } = useContext(CourseContext);

  useEffect(() => {
    setTitle(course.title);
    setCategory(course.category);
    setDescription(course.description);
    setDuration(course.duration);
    setInstructor(course.instructor);
  }, []);

  return (
    <AdminCourseEditScreenComponent
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
      onEditPress={async () => {
        const newCourse = new Course(
          course.id,
          title,
          description,
          category,
          duration,
          instructor,
          new Date(),
        );
        goBack();
        await updateCourse(newCourse);
        await selectAll();
      }}
      onDeletePress={async () => {
        goBack();
        await deleteCourse(course.id);
        await selectAll();
      }}
    />
  );
}

export default AdminCourseEditScreen;
