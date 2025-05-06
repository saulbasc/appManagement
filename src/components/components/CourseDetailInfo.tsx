import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SmallSpacer, MediumSpacer } from '../util/Spacer';

const styles = StyleSheet.create({
  view: {
    paddingTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#ebebeb',
    padding: 20,
  },
  title: {
    fontSize: 45,
    borderBottomWidth: 1,
  },
  category: {
    fontSize: 30,
  },
  defaultFont: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    height: 50,
  },
});

function CourseDetailInfo({ course }: any) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{course?.title}</Text>
      <MediumSpacer />
      <Text style={styles.category}>{course?.category}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{course?.instructor}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{course?.description}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{course?.duration}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{}</Text>
      <MediumSpacer />
    </View>
  );
}

export default CourseDetailInfo;
