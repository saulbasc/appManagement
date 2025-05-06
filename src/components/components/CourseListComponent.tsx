import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../bar/SearchBar';
import CourseListPanel from './CourseListPanel';
import { Context as UserContext } from '../../context/CourseDaoContext';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f2e2e2',
  },
});

function CourseListComponent({ courses, onPress }: any) {
  const { state, resetCourse } = useContext(UserContext);

  useEffect(() => {
    resetCourse();
  }, [state.course]);

  return (
    <View style={styles.view}>
      <SearchBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses ?? []}
        renderItem={({ item }) => (
          <CourseListPanel
            onPress={() => onPress(item)}
            item={item}
          />
        )}
      />
    </View>
  );
}

export default CourseListComponent;
