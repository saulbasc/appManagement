import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { ChangeIdiom } from '../../translation/translation';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
});

function BarDropDown() {
  const [selected, setSelected] = useState('');
  const data = [
    { key: '1', value: 'Español' },
    { key: '2', value: 'Inglés' },
  ];

  return (
    <SelectList
      inputStyles={styles.content}
      search={false}
      placeholder="Idioma"
      onSelect={() => {
        if (selected === 'Español') {
          ChangeIdiom('es');
        } else {
          ChangeIdiom('en');
        }
      }}
      setSelected={(val: any) => {
        setSelected(val);
      }}
      data={data}
      save="value"
      boxStyles={{}}
    />
  );
}

export default BarDropDown;
