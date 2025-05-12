/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoundIconButton from "../common/RoundIconButton";
import { SmallSpacer } from "../../util/Spacer";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    right: 10,
    bottom: 20,
    zIndex: 2,
  },
});

function addIcon({ color, size }: { color: string; size: number }) {
  return <MaterialIcons name="add" size={size} color={color} />;
}

function statsIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons name="stats-chart-sharp" size={size} color={color} />;
}

function AdminButtonsPanel({ onPressAdd, onPressStats }: any) {
  return (
    <View style={styles.content}>
      <RoundIconButton onPress={onPressStats}>
        {statsIcon({ color: AppColors.black, size: 45 })}
      </RoundIconButton>
      <SmallSpacer />
      <RoundIconButton onPress={onPressAdd}>
        {addIcon({ color: AppColors.black, size: 45 })}
      </RoundIconButton>
    </View>
  );
}

export default AdminButtonsPanel;
