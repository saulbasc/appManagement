import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginTitle from './LoginTitle';
import AuthForm from './LoginForm';
import LoginRedirect from './LoginRedirect';
import AppColors from '../../util/globalColors';

const styles = StyleSheet.create({
  content: {
    height: '100%',
    backgroundColor: AppColors.white,
  },
});

function LoginView({
  route, loginTitle, loginRedirect, onSubmit,
} : any) {
  return (
    <View style={styles.content}>
      <LoginTitle
        title={loginTitle}
      />
      <AuthForm
        onSubmit={onSubmit}
      />
      <LoginRedirect
        route={route}
        text={loginRedirect}
      />
    </View>
  );
}

export default LoginView;
