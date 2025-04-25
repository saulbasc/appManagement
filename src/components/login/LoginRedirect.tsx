import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/base';
import { MediumSpacer } from '../util/Spacer';
import { navigate } from '../../navigationRef';
import commonStyles from '../../styles/CommonStyles';

const LIGHT_BLUE_COLOR = '#6b73da';

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: LIGHT_BLUE_COLOR,
  },
});

function LoginRedirect({ text, route }: Readonly<{ text: string; route: string }>) {
  return (
    <TouchableOpacity style={commonStyles.centerTotal} onPress={() => navigate(route)}>
      <MediumSpacer />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default LoginRedirect;
