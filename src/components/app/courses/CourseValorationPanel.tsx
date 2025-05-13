// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from "react";
import { Button } from "@rneui/base";
import { StyleSheet, TextInput, View } from "react-native";
import { AirbnbRating } from "@rn-vui/ratings";
import { MediumSpacer } from "../../util/Spacer";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: AppColors.secondary,
    borderRadius: 20,
    borderColor: AppColors.quaternary,
    padding: 15,
  },
  input: {
    fontSize: 15,
    backgroundColor: AppColors.white,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 15
  },
  button: {
    backgroundColor: AppColors.black,
    borderRadius: 20,
    padding: 10,
    height: 45,
  },
});

function CourseValorationPanel({ valoration, onSubmit }: any) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

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
        reviews={["Horrible", "Malo", "Regular", "Bien", "Muy bueno"]}
        reviewColor={AppColors.black}
        defaultRating={rating}
        onFinishRating={setRating}
        selectedColor={AppColors.black}
        unSelectedColor={AppColors.light}
        starStyle={{ height: 30, width: 30 }}
        starContainerStyle={{ borderBottomWidth: 2 }}
        reviewSize={20}
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
