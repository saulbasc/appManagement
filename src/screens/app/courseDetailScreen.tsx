import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FetchDataWithFilter, Insert } from '../../core/supabaseActions';
import CourseDetailPanel from '../../components/components/CourseDetailPanel';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

async function insert(courseID : string) {
  const { error } = await Insert('inscripcion', {
    ID_curso: courseID,
    ID_usuario: '1',
  });
  console.log(error);
}

function CourseDetailScreen(props: any) {
  const [courseData, setCourseData] = useState<any>();
  const prop = props;
  const id = prop.route.params.courseId;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await FetchDataWithFilter('curso', id);
      if (data) setCourseData(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.view}>
      {courseData != null && (
        <CourseDetailPanel
          data={courseData}
          onPress={() => { insert(id); }}
        />
      )}
    </View>
  );
}

export default CourseDetailScreen;
