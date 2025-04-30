import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CourseDetailPanel from '../../components/components/CourseDetailPanel';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { Context as InscriptionContext } from '../../context/InscriptionDaoContext';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

function CourseDetailScreen(props: any) {
  const { state: courseState, select } = useContext(CourseContext);
  const { state: inscriptionState, isSuscribed } = useContext(InscriptionContext);

  const [courseData, setCourseData] = useState<any>();
  const [suscribed, setSuscribed] = useState<boolean | null>(null);
  const prop = props;
  const courseId = prop.route.params.courseId;
  const userId = prop.route.params.userId;

  useEffect(() => {
    select(courseId);
    isSuscribed(courseId, userId);
    if (courseState) setCourseData(courseState.course);
    if (inscriptionState) setSuscribed(inscriptionState.suscribed);
  }, [courseState.course, inscriptionState.isSuscribed]);

  return (
    <View style={styles.view}>
      {courseData && suscribed !== null && (
        <CourseDetailPanel
          data={courseData}
          suscribed={suscribed}
          onPress={() => {}}
        />
      )}
    </View>
  );
}

export default CourseDetailScreen;
