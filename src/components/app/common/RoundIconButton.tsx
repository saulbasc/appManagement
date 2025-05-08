/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppColors from '../../../util/globalColors';

const styles = StyleSheet.create({
  content: {
    backgroundColor: AppColors.quaternary,
    borderRadius: 90,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
});

function RoundIconButton({ children, onPress }: any) {
  return (
    <TouchableOpacity
      style={styles.content}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

export default RoundIconButton;
