/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGraph from '../../components/components/common/LinearGraph';
import { Context as ValorationContext } from '../../context/ValorationDaoContext';
import { Context as InscriptionContext } from '../../context/InscriptionDaoContext';
import { Context as CourseContext } from '../../context/CourseDaoContext';
import { MediumSpacer, SmallSpacer } from '../../components/util/Spacer';
import tr from '../../manager/TranslationManager';
import ContributionGraphComponent from '../../components/components/common/ContributionGraphComponent';
import LoadingIndicator from '../../components/components/common/LoadingIndicator';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  totalView: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    borderColor: '#a84444',
    borderWidth: 2,
    borderRadius: 20,
  },
  totalText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

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
    <View style={styles.content}>
      <SmallSpacer />
      <View style={styles.totalView}>
        <Text style={styles.totalText}>{tr('totalInscriptionsText')}</Text>
        <Text style={styles.totalText}>{inscriptionState.totalInscriptions}</Text>
      </View>
      <MediumSpacer />
      <Text style={styles.contentText}>{tr('usersForRating')}</Text>
      <SmallSpacer />
      <LinearGraph
        graphDataY={valorationState.valorationsForUsers}
        graphDataX={['1', '2', '3', '4', '5']}
      />
      <MediumSpacer />
      <Text style={styles.contentText}>{tr('courseCreationDates')}</Text>
      <SmallSpacer />
      <ContributionGraphComponent
        data={courseState.dates}
      />
    </View>
  );
}

export default AdminStatsScreen;
