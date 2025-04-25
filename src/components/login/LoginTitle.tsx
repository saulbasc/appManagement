import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/base';
import { MediumSpacer, SmallSpacer } from '../util/Spacer';
import commonStyles from '../../styles/CommonStyles';

const BLUE_COLOR = '#32356b';

const styles = StyleSheet.create({
  loginTitle: {
    color: BLUE_COLOR,
    fontSize: 40,
  },
  loginText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});

function LoginTitle({ title }: any) {
  return (
    <View style={commonStyles.centerTotal}>
      <MediumSpacer />
      <Icon
        name="airplay"
        color={BLUE_COLOR}
        size={80}
      />
      <SmallSpacer />
      <Text style={styles.loginTitle}>{title}</Text>
      <MediumSpacer />
    </View>
  );
}

export default LoginTitle;
