import React, { useEffect, useState } from 'react';
import { Button } from '@rneui/base';
import { StyleSheet, TextInput, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AirbnbRating } from 'react-native-ratings';
import { MediumSpacer } from '../util/Spacer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
    height: 50,
  },
});

function CourseValorationPanel({ valoration, onSubmit }: any) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (valoration != null) {
      setComment(valoration?.comment);
      setRating(valoration?.rating);
    }
  }, []);

  return (
    <View style={styles.container}>
      <AirbnbRating
        count={5}
        reviews={['Horrible', 'Malo', 'Regular', 'Bien', 'Muy bueno']}
        reviewColor="black"
        defaultRating={rating}
        onFinishRating={setRating}
      />
      <MediumSpacer />
      <TextInput
        multiline
        style={styles.input}
        onChangeText={setComment}
        value={comment}
      />
      <MediumSpacer />
      <Button
        title="VALORAR!"
        buttonStyle={styles.button}
        onPress={() => onSubmit(comment, rating)}
      />
    </View>
  );
}

export default CourseValorationPanel;
