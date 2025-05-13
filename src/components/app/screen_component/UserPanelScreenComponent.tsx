import React from "react";
import { StyleSheet, View } from "react-native";
import { MediumSpacer } from "../../util/Spacer";
import SuscribedCoursesPanel from "../user/SuscribedCoursesPanel";
import UserPanel from "../user/UserPanel";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: AppColors.white
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
      <SuscribedCoursesPanel onPress={onPressSuscribedCourses} />
    </View>
  );
}

export default UserPanelScreenComponent;
