import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CourseDetailInfo from '../../components/components/courses/CourseDetailInfo';
import CourseValorationPanel from '../../components/components/courses/CourseValorationPanel';
import { MediumSpacer } from '../../components/util/Spacer';
import CourseSuscribePanel from '../../components/components/courses/CourseSuscribeButton';
import { Context as InscriptionContext } from '../../context/InscriptionDaoContext';
import { Context as ValorationContext } from '../../context/ValorationDaoContext';
import Valoration from '../../types/Valoration';
import Inscription from '../../types/Inscription';
import LoadingIndicator from '../../components/components/common/LoadingIndicator';
import ValorationList from '../../components/components/valoration/ValorationList';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

function CourseDetailScreen(props: any) {
  const prop = props;
  const { course } = prop.route.params;
  const { user } = prop.route.params;

  const [loaded, setLoaded] = useState(false);

  const {
    state: inscriptionState,
    insert: inscriptionInsert,
    remove, isSuscribed,
  } = useContext(InscriptionContext);

  const {
    state: valorationState,
    insert: valorationInsert,
    select: valorationSelect,
    valorationsOfCourse,
  } = useContext(ValorationContext);

  useEffect(() => {
    const Actions = async () => {
      await isSuscribed(course.id, user.id);
      await valorationSelect(user.id, course.id);
      await valorationsOfCourse(course.id);
      setLoaded(true);
    };
    Actions();
  }, []);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView
      style={styles.view}
      showsVerticalScrollIndicator={false}
    >
      <CourseDetailInfo
        course={course}
      />
      <MediumSpacer />
      <CourseSuscribePanel
        suscribed={inscriptionState.suscribed}
        onSuscribe={async () => {
          await inscriptionInsert(new Inscription(course.id, user.id));
          await isSuscribed(course.id, user.id);
        }}
        onUnsuscribe={async () => {
          await remove(course.id, user.id);
          await isSuscribed(course.id, user.id);
        }}
      />
      <MediumSpacer />
      {inscriptionState.suscribed && (
        <CourseValorationPanel
          valoration={valorationState.valoration}
          onSubmit={async (comment: string, rating: number) => {
            await valorationInsert(new Valoration(course.id, user.id, comment, rating));
          }}
        />
      )}
      <MediumSpacer />
      <ValorationList
        course={course}
      />
      <MediumSpacer />
    </ScrollView>
  );
}

export default CourseDetailScreen;
