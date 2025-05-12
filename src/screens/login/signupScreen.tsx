import React from "react";
import useTr from "../../manager/TranslationManager";
import { signUpEmail } from "../../manager/AuthManager";
import LoginView from "../../components/login/LoginView";

function SignupScreen() {
  const tr = useTr();
  return (
    <LoginView
      route="Signin"
      loginTitle={tr("signupTitle")}
      loginRedirect={tr("signupRedirect")}
      onSubmit={signUpEmail}
    />
  );
}

export default SignupScreen;
