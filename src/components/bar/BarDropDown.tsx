/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useTr from "../../manager/TranslationManager";
import AppColors from "../../util/globalColors";
import translation from "../../translation/translation";

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 150,
    height: 50,
    backgroundColor: AppColors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderColor: AppColors.tertiary,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
  },
  dropdownMenuStyle: {
    backgroundColor: AppColors.white,
    borderRadius: 8,
    padding: 10,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 12,
  },
  dropdownSelectedItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: AppColors.primary,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownSelectedItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: AppColors.white,
  },
});

function BarDropDown() {
  const tr = useTr();

  const spanish = tr("spanish");
  const english = tr("english");

  const [defaultLang, setDefaultLang] = useState("");

  const idioms = [{ title: spanish }, { title: english }];

  useEffect(() => {
    const GetLang = async () => {
      const receiveLang = await AsyncStorage.getItem("lang");
      if (receiveLang === "es") {
        setDefaultLang(spanish);
      } else if (receiveLang === "en") {
        setDefaultLang(english);
      } else {
        setDefaultLang(spanish);
      }
    };
    GetLang();
  }, [spanish, english]);

  const handleSelect = async (selectedItem: any) => {
    if (selectedItem.title === spanish) {
      await AsyncStorage.setItem("lang", "es");
      translation.changeLanguage("es");
      setDefaultLang(spanish);
    } else if (selectedItem.title === english) {
      await AsyncStorage.setItem("lang", "en");
      translation.changeLanguage("en");
      setDefaultLang(english);
    }
  };

  return (
    <SelectDropdown
      data={idioms}
      onSelect={handleSelect}
      renderButton={() => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>{defaultLang}</Text>
          <AntDesign name="caretdown" size={20} color={AppColors.tertiary} />
        </View>
      )}
      renderItem={(item, index, isSelected) => (
        <View
          style={{
            ...styles.dropdownItemStyle,
            ...(isSelected && styles.dropdownSelectedItemStyle),
          }}
        >
          <Text
            style={{
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
