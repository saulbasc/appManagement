import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
});

function IconAndText({ icon, text }: any) {
  return (
    <View style={styles.content}>
      {icon}
      {text}
    </View>
  );
}

export default IconAndText;
