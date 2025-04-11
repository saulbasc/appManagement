import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import tr from "../../manager/TranslationManager";
import { Input, Button } from "@rneui/base";
import commonStyles from "../../styles/CommonStyles";

const BLUE_COLOR = '#32356b'

const AuthForm = ({ onSubmit } : any ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={commonStyles.centerTotal}>
            <Input 
                placeholder={tr('loginUser')}
                style={styles.loginInput}
                onChangeText={setEmail}    
            />
            <Input
                placeholder={tr('loginPass')} 
                style={styles.loginInput}
                onChangeText={setPassword}    
            />    
            <Button
                onPress={() => onSubmit({email, password})}
                title={tr('loginButton')}
                type="clear"
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    loginInput: {
        height: 60,
        borderTopRightRadius: 20,
    },
    button: {
        borderBottomWidth: 2,
        borderColor: BLUE_COLOR,
    },
    buttonTitle:{
        fontSize: 25,
        color: BLUE_COLOR,
    },
});

export default AuthForm;