import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Input } from "@rneui/base";
import AppColors from "../../util/globalColors";

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
    paddingHorizontal: 10,
    margin: 0,
    left: 5,
    right: 5,
    top: 10,
    backgroundColor: AppColors.ultraLight,
    position: "absolute",
    overflow: "hidden",
    borderRadius: 45,
    zIndex: 3,
    elevation: 10
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
        leftIcon={<Icon name="search" size={35} color={AppColors.quaternary} />}
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
