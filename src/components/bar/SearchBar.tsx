import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input } from '@rneui/base';
import AppColors from '../../util/globalColors';

const styles = StyleSheet.create({
  searchBar: {
    zIndex: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.quaternary,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function SearchBar({ value, onChangeText }: any) {
  return (
    <Input
      leftIcon={<Icon name="search" size={35} color={AppColors.quaternary} />}
      onChangeText={onChangeText}
      value={value}
      style={styles.searchBar}
      inputContainerStyle={{ borderBottomWidth: 0 }}
    />
  );
}

export default SearchBar;
