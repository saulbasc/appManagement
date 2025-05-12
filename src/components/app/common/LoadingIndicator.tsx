import React from "react";
import { ActivityIndicator } from "react-native";
import AppColors from "../../../util/globalColors";

function LoadingIndicator() {
  return (
    <ActivityIndicator
      size="large"
      color={AppColors.quaternary}
      style={{ marginTop: 100 }}
    />
  );
}

export default LoadingIndicator;
