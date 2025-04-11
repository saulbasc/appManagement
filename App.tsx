import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarView from './src/components/bar/BarView';
import { navigationRef } from './src/navigationRef';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/components/app/AppStackNavigator';

export default function App() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <BarView/>
      <NavigationContainer ref={navigationRef}>
        <AppStackNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
};