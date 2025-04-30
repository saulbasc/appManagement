import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/base';
import { SmallSpacer, MediumSpacer } from '../util/Spacer';
import tr from '../../manager/TranslationManager';

const styles = StyleSheet.create({
  view: {
    paddingTop: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'white',
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

function CourseDetailPanel({ data, suscribed, onPress }: any) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{data?.title}</Text>
      <MediumSpacer />
      <Text style={styles.category}>{data?.category}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{data?.description}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{data?.instructor}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{data?.duration}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{data?.startDate}</Text>
      <MediumSpacer />
      <Button
        title={suscribed ? tr('suscribeCourseButton') : tr('unsuscribeCourseButton')}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}

export default CourseDetailPanel;
