import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import BarDropDown from './BarDropDown';
import { navigate } from '../../navigationRef';

const BLUE_COLOR = '#32356b';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: BLUE_COLOR,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

function BarView() {
  return (
    <View style={styles.content}>
      <BarDropDown />
      <TouchableOpacity
        onPress={() => navigate('Signin')}
      >
        <Icon name="logout" />
      </TouchableOpacity>
    </View>
  );
}

export default BarView;
