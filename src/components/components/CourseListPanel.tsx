/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Text } from '@rneui/base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SmallSpacer } from '../util/Spacer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#db7f7f',
    borderColor: '#6c0d0d',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },
  rowView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'white',
  },
  category: {
    fontSize: 15,
  },
  text: {
    marginLeft: 10,
    color: 'white',
  },
});

function CourseListPanel({ item, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.title}>{item.title}</Text>
      <SmallSpacer />
      <View style={styles.rowView}>
        <MaterialCommunityIcons name="google-classroom" size={30} color="#6c0d0d" />
        <Text style={[styles.category, styles.text]}>{item.category}</Text>
      </View>
      <SmallSpacer />
      <View style={styles.rowView}>
        <FontAwesome5 name="chalkboard-teacher" size={24} color="#6c0d0d" />
        <Text style={styles.text}>{item.instructor}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CourseListPanel;
