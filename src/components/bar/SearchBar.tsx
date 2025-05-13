import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/base";
import AppColors from "../../util/globalColors";

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
    margin: 0,
    left: 5,
    right: 5,
    top: 5,
    backgroundColor: AppColors.white,
    borderWidth: 1,
    position: "absolute",
    overflow: "hidden",
    borderRadius: 45,
    zIndex: 3,
  },
  inputContainer: {
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
    height: 60, 
  },
  inputStyle: {
    zIndex: 2,
    borderRadius: 45,
    borderColor: AppColors.quaternary,
    backgroundColor: AppColors.white,
    paddingHorizontal: 10,
    fontSize: 20,
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
