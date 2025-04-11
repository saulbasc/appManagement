import React from "react";
import tr from "../../manager/TranslationManager";
import { signInEmail } from "../../manager/AuthManager";
import LoginView from "../../components/login/LoginView";

const SignInScreen = () => {
    return (
        <LoginView 
            route = {'Signup'}
            loginTitle = {tr('loginTitle')}
            loginRedirect = {tr('loginRedirect')}
            onSubmit = { signInEmail }
        />
    );
}

export default SignInScreen;