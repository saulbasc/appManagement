/* eslint-disable import/no-extraneous-dependencies */
import { Button, Input } from '@rneui/base';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MediumSpacer, SmallSpacer } from '../../util/Spacer';
import tr from '../../../manager/TranslationManager';
import { Context as UserContext } from '../../../context/UserDaoContext';
import AppColors from '../../../util/globalColors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: AppColors.quaternary,
    backgroundColor: AppColors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: AppColors.white,
    paddingLeft: 15,
  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: AppColors.primary,
  },
  adminButton: {
    backgroundColor: AppColors.primary,
  },
});

function UserPanel({ user }: any) {
  const userName = user.name;
  const userEmail = user.email;
  const userRol = user.rol;

  const { update } = useContext(UserContext);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    setNameInput(userName);
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5
        name="user-edit"
        size={100}
        color={AppColors.quaternary}
      />
      <MediumSpacer />
      <Input
        style={styles.input}
        leftIcon={<Feather name="user" size={30} color={AppColors.quaternary} />}
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
        leftIcon={<Fontisto name="email" size={30} color={AppColors.quaternary} />}
        disabled
        value={userEmail}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        leftIconContainerStyle={{ marginRight: 15 }}
      />
      <Input
        style={styles.input}
        leftIcon={<MaterialIcons name="security" size={30} color={AppColors.quaternary} />}
        disabled
        value={userRol}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        leftIconContainerStyle={{ marginRight: 15 }}
      />
      <MediumSpacer />
      <Button
        title={tr('profileSaveButton')}
        buttonStyle={[styles.button, styles.saveButton]}
        onPress={async () => {
          const newUser = user;
          newUser.name = nameInput;
          await update(newUser);
        }}
      />
      <SmallSpacer />
      <Button
        title={userRol === 'User' ? tr('profileUpgradeButton') : tr('profileDowngradeButton')}
        buttonStyle={[styles.button, styles.adminButton]}
        onPress={async () => {
          const newUser = user;
          if (newUser.rol === 'User') {
            newUser.rol = 'Admin';
          } else {
            newUser.rol = 'User';
          }
          await update(newUser);
        }}
      />
    </View>
  );
}

export default UserPanel;
