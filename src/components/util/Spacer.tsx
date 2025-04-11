import React from "react";
import { View } from "react-native";

const BaseSpacer = ({ space }: any ) => {
    return <View style={{marginVertical: space}}/>
}

const SmallSpacer = () => {
    return <BaseSpacer space={5}/>
}

const MediumSpacer = () => {
    return <BaseSpacer space={20}/>
}

const BigSpacer = () => {
    return <BaseSpacer space={40}/>
}

export {SmallSpacer, MediumSpacer, BigSpacer};