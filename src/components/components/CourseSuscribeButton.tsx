import React from 'react';
import { Button } from '@rneui/base';
import { StyleSheet } from 'react-native';
import tr from '../../manager/TranslationManager';

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: 'black',
    padding: 10,
  },
});

function CourseSuscribeButton({
  suscribed, onSuscribe, onUnsuscribe,
}: any) {
  return (
    <Button
      title={suscribed ? tr('unsuscribeCourseButton') : tr('suscribeCourseButton')}
      buttonStyle={styles.button}
      onPress={async () => {
        if (suscribed) {
          await onUnsuscribe();
        } else {
          await onSuscribe();
        }
      }}
    />
  );
}

export default CourseSuscribeButton;
