import React from "react";
import { View, StyleSheet } from 'react-native';
import BarDropDown from "./BarDropDown";

const BLUE_COLOR = '#32356b'

const BarView = () => {
    return (
        <View style={styles.content}>
            <BarDropDown/>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: BLUE_COLOR,
        flexDirection: "row"
    }
});

export default BarView;