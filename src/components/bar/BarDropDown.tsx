/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, Text, View } from 'react-native';
import tr from '../../manager/TranslationManager';
import AppColors from '../../util/globalColors';

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: AppColors.white,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    borderWidth: 2,
    borderColor: AppColors.tertiary,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: AppColors.white,
    borderRadius: 8,
    padding: 10,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 12,
  },
  dropdownSelectedItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: AppColors.primary,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownSelectedItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: AppColors.white,
  },
});

function BarDropDown() {
  const idioms = [
    { title: tr('spanish') },
    { title: tr('english') },
  ];

  return (
    <SelectDropdown
      data={idioms}
      onSelect={(selectedItem) => {
        if (selectedItem.title === tr('spanish')) {
          console.log('España');
        } else if (selectedItem.title === tr('english')) {
          console.log('Ingland');
        }
      }}
      renderButton={(selectedItem) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem?.title ?? tr('chooseIdiom')}
          </Text>
          <AntDesign name="caretdown" size={24} color={AppColors.tertiary} />
        </View>
      )}
      renderItem={(item, index, isSelected) => (
        <View
          style={{
            ...styles.dropdownItemStyle,
            ...(isSelected && styles.dropdownSelectedItemStyle),
          }}
        >
          <Text style={{
            ...styles.dropdownItemTxtStyle,
            ...(isSelected && styles.dropdownSelectedItemTxtStyle),
          }}
          >
            {item.title}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
}

export default BarDropDown;
