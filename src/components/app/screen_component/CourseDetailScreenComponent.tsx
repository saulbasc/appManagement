import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BigSpacer, MediumSpacer } from "../../util/Spacer";
import ValorationList from "../valoration/ValorationList";
import CourseDetailInfo from "../courses/CourseDetailInfo";
import CourseValorationPanel from "../courses/CourseValorationPanel";
import CourseSuscribeButton from "../courses/CourseSuscribeButton";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

function CourseDetailScreenComponent({
  course,
  suscribed,
  onSuscribe,
  onUnsuscribe,
  valoration,
  onSubmitValoration,
}: any) {
  return (
    <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
      <CourseDetailInfo course={course} />
      <MediumSpacer />
      <CourseSuscribeButton
        suscribed={suscribed}
        onSuscribe={onSuscribe}
        onUnsuscribe={onUnsuscribe}
      />
      <MediumSpacer />
      {suscribed && (
        <CourseValorationPanel
          valoration={valoration}
          onSubmit={onSubmitValoration}
        />
      )}
      <BigSpacer />
      <ValorationList course={course} />
      <MediumSpacer />
    </ScrollView>
  );
}

export default CourseDetailScreenComponent;
