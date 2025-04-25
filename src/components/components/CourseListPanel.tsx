import React from 'react';
import { Text } from '@rneui/base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MediumSpacer } from '../util/Spacer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  category: {
    fontSize: 15,
  },
});

function CourseListPanel({ item, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{item.titulo}</Text>
      <MediumSpacer />
      <Text style={styles.category}>{item.categoria}</Text>
    </TouchableOpacity>
  );
}

export default CourseListPanel;
