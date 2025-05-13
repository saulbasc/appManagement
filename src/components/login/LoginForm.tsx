/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useTr from "../../manager/TranslationManager";
import AppColors from "../../util/globalColors";
import { MediumSpacer } from "../util/Spacer";

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  inputContent: {
    backgroundColor: AppColors.secondaryComplement,
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 5,
    elevation: 5
  },
  loginInput: {
    height: 45,
    borderRadius: 20,
    backgroundColor: AppColors.white,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    backgroundColor: AppColors.primary,
    height: 50,
  },
  buttonTitle: {
    fontSize: 20,
    color: AppColors.white,
  },
});

function AuthForm({ onSubmit }: any) {
  const tr = useTr();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.content}>
      <View style={styles.inputContent}>
        <Input
          placeholder={tr("loginUser")}
          style={styles.loginInput}
          onChangeText={setEmail}
          leftIcon={
            <Feather name="user" size={40} color={AppColors.quaternary} />
          }
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
        />
        <Input
          placeholder={tr("loginPass")}
          style={styles.loginInput}
          onChangeText={setPassword}
          leftIcon={
            <MaterialIcons
              name="password"
              size={40}
              color={AppColors.quaternary}
            />
          }
          inputContainerStyle={{ borderBottomWidth: 0 }}
          leftIconContainerStyle={{ marginRight: 15 }}
          secureTextEntry
        />
      </View>
      <MediumSpacer />
      <Button
        onPress={() => onSubmit({ email, password })}
        title={tr("loginButton")}
        type="clear"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
      />
    </View>
  );
}

export default AuthForm;
