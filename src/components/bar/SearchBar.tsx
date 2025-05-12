import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/base";
import AppColors from "../../util/globalColors";

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
    margin: 0,
    position: "relative",
    overflow: "hidden",
    borderBottomWidth: 1,
  },
  inputContainer: {
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
    height: 50, 
  },
  inputStyle: {
    zIndex: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.quaternary,
    backgroundColor: AppColors.white,
    paddingHorizontal: 10,
    fontSize: 16,
    height: "100%", 
  },
  containerStyle: {
    padding: 0,
    margin: 0,
    height: 60, 
  },
});

function SearchBar({ value, onChangeText }: any) {
  return (
    <View style={styles.wrapper}>
      <Input
        leftIcon={<Icon name="search" size={40} color={AppColors.quaternary} />}
        onChangeText={onChangeText}
        value={value}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
}

export default SearchBar;
