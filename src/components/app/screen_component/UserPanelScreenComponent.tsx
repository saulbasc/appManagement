import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MediumSpacer } from '../../util/Spacer';
import SuscribedCoursesPanel from '../user/SuscribedCoursesPanel';
import UserPanel from '../user/UserPanel';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

function UserPanelScreenComponent({
  user,
  onPressAdminButton,
  onPressSaveButton,
  onPressSuscribedCourses,
}: any) {
  return (
    <View style={styles.container}>
      <UserPanel
        user={user}
        onPressAdminButton={onPressAdminButton}
        onPressSaveButton={onPressSaveButton}
      />
      <MediumSpacer />
      <SuscribedCoursesPanel
        onPress={onPressSuscribedCourses}
      />
    </View>
  );
}

export default UserPanelScreenComponent;
