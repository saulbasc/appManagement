import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../../components/bar/SearchBar';
import CourseListPanel from '../../components/components/CourseListPanel';
import { navigate } from '../../navigationRef';
import { FetchData } from '../../core/supabaseActions';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
});

function CourseListScreen() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await FetchData('curso');
      if (data) setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.view}>
      <SearchBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses}
        renderItem={({ item }) => (
          <CourseListPanel
            onPress={() => navigate('CourseDetail', { courseId: item.ID })}
            item={item}
          />
        )}
      />
    </View>
  );
}

export default CourseListScreen;
