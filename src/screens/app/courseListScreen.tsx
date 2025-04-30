import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../../components/bar/SearchBar';
import CourseListPanel from '../../components/components/CourseListPanel';
import { navigate } from '../../navigationRef';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { GetID } from '../../core/supabaseActions';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
});

function CourseListScreen() {
  const { state, selectAll } = useContext(CourseContext);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    selectAll();
  }, []);
  useEffect(() => {
    if (state.courses) setCourses(state.courses);
  }, [state.courses]);

  return (
    <View style={styles.view}>
      <SearchBar />
      <FlatList
        data={courses ?? []}
        renderItem={({ item }) => (
          <CourseListPanel
            onPress={async () => {
              navigate('CourseDetail', { courseId: item.id, userId: await GetID() });
            }}
            item={item}
          />
        )}
      />
    </View>
  );
}

export default CourseListScreen;
