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

function CourseDetailPanel(data : any, onPress : any) {
  const completeData = data;
  const courseData = completeData.data;
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{courseData[0].titulo}</Text>
      <MediumSpacer />
      <Text style={styles.category}>{courseData[0].categoria}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{courseData[0].descripcion}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{courseData[0].instructor}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{courseData[0].duracion}</Text>
      <SmallSpacer />
      <Text style={styles.defaultFont}>{courseData[0].fecha_creacion}</Text>
      <MediumSpacer />
      <Button
        title={tr('suscribeCourseButton')}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}

export default CourseDetailPanel;
