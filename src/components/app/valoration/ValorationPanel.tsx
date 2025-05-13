import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "@rn-vui/ratings";
import AppColors from "../../../util/globalColors";
import { MediumSpacer, SmallSpacer } from "../../util/Spacer";

const styles = StyleSheet.create({
  content: {
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  user: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginRight: 20,
  },
  rating: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

function ValorationPanel({ item }: any) {
  return (
    <View style={styles.content}>
      <Text style={styles.user}>{item.userName}</Text>
      <AirbnbRating
        defaultRating={item.rating}
        selectedColor={AppColors.black}
        unSelectedColor={AppColors.lightGray}
        isDisabled
        showRating={false}
        ratingContainerStyle={styles.rating}
        starStyle={{ height: 20, width: 20 }}
      />
      <MediumSpacer />
      <Text style={styles.text}>{item.comment}</Text>
      <SmallSpacer />
    </View>
  );
}

export default ValorationPanel;
