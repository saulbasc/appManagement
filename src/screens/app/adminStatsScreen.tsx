/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { Context as ValorationContext } from '../../context/ValorationDaoContext';
import { Context as InscriptionContext } from '../../context/InscriptionDaoContext';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import LoadingIndicator from '../../components/components/common/LoadingIndicator';
import AdminStatsScreenComponent from '../../components/components/screen_component/AdminStatsScreenComponent';

function AdminStatsScreen() {
  const { state: valorationState, valorationsForUsers } = useContext(ValorationContext);
  const { state: inscriptionState, totalInscriptions } = useContext(InscriptionContext);
  const { state: courseState, getDates } = useContext(CourseContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const Actions = async () => {
      await valorationsForUsers();
      await totalInscriptions();
      await getDates();
      setLoaded(true);
    };
    Actions();
  }, []);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <AdminStatsScreenComponent
      totalInscriptions={inscriptionState.totalInscriptions}
      valorationsForUsers={valorationState.valorationsForUsers}
      dates={courseState.dates}
    />
  );
}

export default AdminStatsScreen;
