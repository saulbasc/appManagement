import React from 'react';
import tr from '../../manager/TranslationManager';
import { signInEmail } from '../../manager/AuthManager';
import LoginView from '../../components/login/LoginView';

function SignInScreen() {
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
