import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../../bar/SearchBar';
import CourseListPanel from './CourseListPanel';
import { Context as UserContext } from '../../../context/CourseDaoContext';
import AppColors from '../../../util/globalColors';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: AppColors.white,
  },
});

function CourseListComponent({ courses, onPressCourse }: any) {
  const { state, resetCourse } = useContext(UserContext);
  const [text, setText] = useState('');

  useEffect(() => {
    resetCourse();
  }, [state.courses]);

  const filteredCourses = courses?.filter((course: any) => course
    .title.toLowerCase().includes(text.toLocaleLowerCase()));

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
      />
    </View>
  );
}

export default CourseListComponent;
