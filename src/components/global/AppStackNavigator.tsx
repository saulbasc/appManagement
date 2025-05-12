import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import SignInScreen from "../../screens/login/signinScreen";
import SignupScreen from "../../screens/login/signupScreen";
import CourseListScreen from "../../screens/app/courseListScreen";
import CourseDetailScreen from "../../screens/app/courseDetailScreen";
import UserProfileScreen from "../../screens/app/userProfileScreen";
import AdminScreen from "../../screens/app/adminScreen";
import SuscribedCoursesScreen from "../../screens/app/suscribedCoursesScreen";
import AdminStatsScreen from "../../screens/app/adminStatsScreen";
import AdminCourseEditScreen from "../../screens/app/adminCourseEditScreen";
import AdminCourseCreationScreen from "../../screens/app/adminCourseCreationScreen";

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
        name="SuscribedCourses"
        component={SuscribedCoursesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminEdit"
        component={AdminCourseEditScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminStats"
        component={AdminStatsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminCreation"
        component={AdminCourseCreationScreen}
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
