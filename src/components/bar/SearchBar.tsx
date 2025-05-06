import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input } from '@rneui/base';

const styles = StyleSheet.create({
  searchBar: {
    zIndex: 2,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
});

function SearchBar() {
  const [text, setText] = useState('');

  return (
    <Input
      leftIcon={<Icon name="search" size={35} />}
      onChangeText={setText}
      value={text}
      style={styles.searchBar}
      inputContainerStyle={{ borderBottomWidth: 0 }}
    />
  );
}

export default SearchBar;
