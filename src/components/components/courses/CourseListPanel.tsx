/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Text } from '@rneui/base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MediumSpacer, SmallSpacer } from '../../util/Spacer';
import AppColors from '../../../util/globalColors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.secondary,
    borderColor: AppColors.quaternary,
    borderWidth: 0,
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },
  rowView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderBottomColor: AppColors.quaternary,
    borderBottomWidth: 1,
    color: AppColors.quaternary,
  },
  category: {
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    color: AppColors.quaternary,
  },
});

function CourseListPanel({ item, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.title}>{item.title}</Text>
      <MediumSpacer />
      <View style={styles.rowView}>
        <MaterialCommunityIcons name="google-classroom" size={30} color={AppColors.quaternary} />
        <Text style={[styles.category, styles.text]}>{item.category}</Text>
      </View>
      <SmallSpacer />
      <View style={styles.rowView}>
        <FontAwesome5 name="chalkboard-teacher" size={24} color={AppColors.quaternary} />
        <Text style={styles.text}>{item.instructor}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CourseListPanel;
