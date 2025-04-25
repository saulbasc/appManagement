import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Icon } from '@rneui/base';

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    top: 5,
    right: 5,
    left: 5,
    zIndex: 2,
    height: 60,
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 50,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <Icon
        name="search"
        size={35}
      />
      <Input />
    </View>
  );
}

export default SearchBar;
