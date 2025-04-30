import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import SignInScreen from '../../screens/login/signinScreen';
import SignupScreen from '../../screens/login/signupScreen';
import CourseListScreen from '../../screens/app/courseListScreen';
import CourseHistoricScreen from '../../screens/app/courseHistoricScreen';
import CourseDetailScreen from '../../screens/app/courseDetailScreen';
import UserProfileScreen from '../../screens/app/userProfileScreen';
import AdminScreen from '../../screens/app/adminScreen';

const Stack = createNativeStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseHistoric"
        component={CourseHistoricScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;
