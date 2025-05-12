import React from "react";
import { View } from "react-native";

function BaseSpacer({ space }: any) {
  return <View style={{ marginVertical: space }} />;
}

function SmallSpacer() {
  return <BaseSpacer space={5} />;
}

function MediumSpacer() {
  return <BaseSpacer space={20} />;
}

function BigSpacer() {
  return <BaseSpacer space={40} />;
}

export { SmallSpacer, MediumSpacer, BigSpacer };
