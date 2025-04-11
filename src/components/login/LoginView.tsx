import { StyleSheet, View } from "react-native";
import LoginTitle from "./LoginTitle";
import AuthForm from "./LoginForm";
import LoginRedirect from "./LoginRedirect";

const LoginView = ({ route, loginTitle, loginRedirect, onSubmit }: any) => {
    return (
        <View style={styles.content}>
            <LoginTitle
                title = {loginTitle}
            />
            <AuthForm
                onSubmit={onSubmit}
            />
            <LoginRedirect
                route = {route}
                text = {loginRedirect}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        height: '100%',
        backgroundColor: 'white',
    }
});

export default LoginView;