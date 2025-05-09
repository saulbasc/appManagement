/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SmallSpacer, MediumSpacer } from '../../util/Spacer';
import AppColors from '../../../util/globalColors';
import IconAndText from '../common/IconAndText';
import useTr from '../../../manager/TranslationManager';

const styles = StyleSheet.create({
  view: {
    paddingTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: AppColors.secondary,
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
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});

function CourseDetailInfo({ course }: any) {
  const tr = useTr();
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{course?.title}</Text>
      <MediumSpacer />
      <IconAndText
        icon={<MaterialCommunityIcons name="google-classroom" size={38} color={AppColors.quaternary} />}
        text={<Text style={styles.text}>{course?.category}</Text>}
      />
      <SmallSpacer />
      <IconAndText
        icon={<FontAwesome5 name="chalkboard-teacher" size={30} color="black" />}
        text={<Text style={styles.text}>{course?.instructor}</Text>}
      />
      <SmallSpacer />
      <IconAndText
        icon={<AntDesign name="clockcircleo" size={35} color="black" />}
        text={(
          <Text style={styles.text}>
            {course?.duration}
            {' '}
            {tr('hours')}
          </Text>
        )}
      />
      <MediumSpacer />
      <Text style={styles.defaultFont}>{course?.description}</Text>
      <SmallSpacer />
      <MediumSpacer />
    </View>
  );
}

export default CourseDetailInfo;
