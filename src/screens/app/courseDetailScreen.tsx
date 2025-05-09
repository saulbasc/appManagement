import React, { useContext, useEffect, useState } from 'react';
import { Context as InscriptionContext } from '../../context/InscriptionDaoContext';
import { Context as ValorationContext } from '../../context/ValorationDaoContext';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import Valoration from '../../types/Valoration';
import Inscription from '../../types/Inscription';
import LoadingIndicator from '../../components/app/common/LoadingIndicator';
import CourseDetailScreenComponent from '../../components/app/screen_component/CourseDetailScreenComponent';

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

  const {
    selectAllWithID: selectAllCoursesWithID,
  } = useContext(CourseContext);

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
    <CourseDetailScreenComponent
      course={course}
      suscribed={inscriptionState.suscribed}
      onSuscribe={async () => {
        await inscriptionInsert(new Inscription(course.id, user.id));
        await isSuscribed(course.id, user.id);
        await selectAllCoursesWithID(user.id);
      }}
      onUnsuscribe={async () => {
        await remove(course.id, user.id);
        await isSuscribed(course.id, user.id);
        await selectAllCoursesWithID(user.id);
      }}
      valoration={valorationState.valoration}
      onSubmitValoration={async (comment: string, rating: number) => {
        await valorationInsert(new Valoration(course.id, user.id, comment, rating));
        await valorationsOfCourse(course.id);
      }}
    />
  );
}

export default CourseDetailScreen;
