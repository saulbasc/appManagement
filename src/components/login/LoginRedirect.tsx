import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MediumSpacer } from "../util/Spacer";
import { Text } from "@rneui/base";
import { navigate } from "../../navigationRef";
import commonStyles from "../../styles/CommonStyles";

const LIGHT_BLUE_COLOR = '#6b73da'

const LoginRedirect = (props: {text: string, route: string}) => {
    
    return (
        <TouchableOpacity style={commonStyles.centerTotal} onPress={() => navigate(props.route)}>
            <MediumSpacer/>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: LIGHT_BLUE_COLOR,
    }
});

export default LoginRedirect;