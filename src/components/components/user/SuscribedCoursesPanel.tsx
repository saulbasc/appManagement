/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import tr from '../../../manager/TranslationManager';
import { navigate } from '../../../navigationRef';
import AppColors from '../../../util/globalColors';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    backgroundColor: AppColors.quaternary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: AppColors.white,
    marginRight: 20,
  },
});

function SuscribedCoursesPanel() {
  return (
    <TouchableOpacity
      onPress={async () => {
        navigate('SuscribedCourses');
      }}
    >
      <View style={styles.content}>
        <Text style={styles.text}>{tr('profileListButton')}</Text>
        <Feather name="arrow-right" size={40} color={AppColors.white} />
      </View>
    </TouchableOpacity>
  );
}

export default SuscribedCoursesPanel;
