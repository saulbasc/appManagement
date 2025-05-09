import React from 'react';
import useTr from '../../manager/TranslationManager';
import { signInEmail } from '../../manager/AuthManager';
import LoginView from '../../components/login/LoginView';

function SignInScreen() {
  const tr = useTr();
  return (
    <LoginView
      route="Signup"
      loginTitle={tr('signinTitle')}
      loginRedirect={tr('signinRedirect')}
      onSubmit={signInEmail}
    />
  );
}

export default SignInScreen;
