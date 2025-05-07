import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import UserPanel from '../../components/components/user/UserPanel';
import SuscribedCoursesPanel from '../../components/components/user/SuscribedCoursesPanel';
import { MediumSpacer } from '../../components/util/Spacer';
import { Context as UserContext } from '../../context/UserDaoContext';
import { GetID } from '../../core/supabaseActions';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

function UserProfileScreen() {
  const { state, select } = useContext(UserContext);

  useEffect(() => {
    const GetId = async () => {
      const id = await GetID();
      if (id) await select(id);
    };
    GetId();
  }, []);

  if (!state.user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <UserPanel
        user={state.user}
      />
      <MediumSpacer />
      <SuscribedCoursesPanel />
    </View>
  );
}

export default UserProfileScreen;
