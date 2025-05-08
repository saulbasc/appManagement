import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../../bar/SearchBar';
import { Context as CourseContext } from '../../../context/CourseDaoContext';
import AppColors from '../../../util/globalColors';
import AdminCourseListPanel from './AdminCourseListPanel';
import LoadingIndicator from '../common/LoadingIndicator';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: AppColors.white,
  },
});

function AdminCourseListComponent({ courses, onPress }: any) {
  const { selectAll } = useContext(CourseContext);
  const [text, setText] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const GetCourses = async () => {
      await selectAll();
      setLoaded(true);
    };
    GetCourses();
  }, []);

  const filteredCourses = courses?.filter((course: any) => course
    .title.toLowerCase().includes(text.toLocaleLowerCase()));

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.view}>
      <SearchBar
        value={text}
        onChangeText={setText}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCourses ?? []}
        renderItem={({ item }) => (
          <AdminCourseListPanel
            onPress={() => onPress(item)}
            item={item}
          />
        )}
      />
    </View>
  );
}

export default AdminCourseListComponent;
