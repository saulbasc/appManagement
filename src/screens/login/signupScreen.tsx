import React from "react";
import tr from "../../manager/TranslationManager";
import { signUpEmail } from "../../manager/AuthManager";
import LoginView from "../../components/login/LoginView";

const SignupScreen = () => {
    return (
        <LoginView
            route = {'Signin'}
            loginTitle = {tr('signupTitle')}
            loginRedirect = {tr('signupRedirect')}
            onSubmit = { signUpEmail }
        />
    );
}

export default SignupScreen;