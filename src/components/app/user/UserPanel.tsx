/* eslint-disable import/no-extraneous-dependencies */
import { Button, Input } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';
import { MediumSpacer, SmallSpacer } from "../../util/Spacer";
import useTr from "../../../manager/TranslationManager";
import AppColors from "../../../util/globalColors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    borderColor: AppColors.quaternary,
    backgroundColor: AppColors.secondary,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 20,
    elevation: 8
  },
  input: {
    borderRadius: 20,
    backgroundColor: AppColors.white,
    paddingLeft: 15,
  },
  enabledInput: {
    borderRadius: 20,
    backgroundColor: AppColors.white,
    borderWidth: 1,
    paddingLeft: 15,
  },
  button: {
    height: 50,
    width: 340,
    borderRadius: 20,
    backgroundColor: AppColors.primary,
  },
});

function UserPanel({ user, onPressAdminButton, onPressSaveButton }: any) {
  const tr = useTr();

  const userName = user.name;
  const userEmail = user.email;
  const userRol = user.rol;

  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    setNameInput(userName);
  }, []);

  return (
    <LinearGradient 
      colors={[AppColors.light, AppColors.secondary]}
      style={styles.container}
    >
      <FontAwesome5 name="user-edit" size={100} color={AppColors.quaternary} />
      <MediumSpacer />
      <Input
        style={styles.enabledInput}
        leftIcon={
          <Feather name="user" size={30} color={AppColors.quaternary} />
        }
        leftIconContainerStyle={{ marginRight: 15 }}
        value={nameInput}
        onChangeText={(value) => {
          if (value.length <= 15) {
            setNameInput(value);
          }
        }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />
      <Input
        style={styles.input}
        leftIcon={
          <Fontisto name="email" size={30} color={AppColors.quaternary} />
        }
        inputStyle={{ color: AppColors.darkGray }}
        editable={false}
        value={userEmail}
        inputContainerStyle={{ 
          borderBottomWidth: 0
        }}
        leftIconContainerStyle={{ marginRight: 15 }}
      />
      <Input
        style={styles.input}
        leftIcon={
          <MaterialIcons
            name="security"
            size={30}
            color={AppColors.quaternary}
          />
        }
        inputStyle={{ color: AppColors.darkGray }}
        editable={false}
        value={userRol}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        leftIconContainerStyle={{ marginRight: 15 }}
      />
      <MediumSpacer />
      <Button
        title={tr("profileSaveButton")}
        buttonStyle={styles.button}
        onPress={() => onPressSaveButton(nameInput)}
      />
      <SmallSpacer />
      <Button
        title={
          userRol === "User"
            ? tr("profileUpgradeButton")
            : tr("profileDowngradeButton")
        }
        buttonStyle={styles.button}
        onPress={onPressAdminButton}
      />
    </LinearGradient>
  );
}

export default UserPanel;
