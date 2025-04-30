import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from '@rneui/base';

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
  const [text, setText] = useState('');

  return (
    <View style={styles.searchBar}>
      <Icon
        name="search"
        size={35}
      />
      <TextInput
        onChangeText={setText}
        value={text}
        style={{ fontSize: 20 }}
      />
    </View>
  );
}

export default SearchBar;
