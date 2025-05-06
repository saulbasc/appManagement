/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import tr from '../../manager/TranslationManager';
import { navigate } from '../../navigationRef';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    color: 'black',
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
        <Feather name="arrow-right" size={40} color="black" />
      </View>
    </TouchableOpacity>
  );
}

export default SuscribedCoursesPanel;
