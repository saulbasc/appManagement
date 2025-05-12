import React from "react";
import { Button } from "@rneui/base";
import { StyleSheet } from "react-native";
import useTr from "../../../manager/TranslationManager";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: AppColors.quaternary,
    padding: 10,
    height: 50,
  },
});

function CourseSuscribeButton({ suscribed, onSuscribe, onUnsuscribe }: any) {
  const tr = useTr();
  return (
    <Button
      title={
        suscribed ? tr("unsuscribeCourseButton") : tr("suscribeCourseButton")
      }
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
