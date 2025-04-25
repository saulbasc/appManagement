import React from 'react';
import tr from '../../manager/TranslationManager';
import { signUpEmail } from '../../manager/AuthManager';
import LoginView from '../../components/login/LoginView';

function SignupScreen() {
  return (
    <LoginView
      route="Signin"
      loginTitle={tr('signupTitle')}
      loginRedirect={tr('signupRedirect')}
      onSubmit={signUpEmail}
    />
  );
}

export default SignupScreen;
