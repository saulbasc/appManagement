import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import CourseDetailInfo from '../../components/components/CourseDetailInfo';
import CourseValorationPanel from '../../components/components/CourseValorationPanel';
import { MediumSpacer, SmallSpacer } from '../../components/util/Spacer';
import CourseSuscribePanel from '../../components/components/CourseSuscribeButton';
import { Context as InscriptionContext } from '../../context/InscriptionDaoContext';
import { Context as ValorationContext } from '../../context/ValorationDaoContext';
import Valoration from '../../types/Valoration';
import Inscription from '../../types/Inscription';

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
  } = useContext(ValorationContext);

  useEffect(() => {
    const Actions = async () => {
      await isSuscribed(course.id, user.id);
      await valorationSelect(user.id, course.id);
      setLoaded(true);
    };
    Actions();
  }, []);

  if (!loaded) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 100 }} />;
  }

  return (
    <ScrollView style={styles.view}>
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
      <SmallSpacer />
      {inscriptionState.suscribed && (
        <CourseValorationPanel
          valoration={valorationState.valoration}
          onSubmit={async (comment: string, rating: number) => {
            await valorationInsert(new Valoration(course.id, user.id, comment, rating));
          }}
        />
      )}
      <MediumSpacer />
    </ScrollView>
  );
}

export default CourseDetailScreen;
