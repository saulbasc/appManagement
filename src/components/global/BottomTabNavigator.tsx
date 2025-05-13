/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import CourseListScreen from "../../screens/app/courseListScreen";
import UserProfileScreen from "../../screens/app/userProfileScreen";
import AdminScreen from "../../screens/app/adminScreen";
import AppColors from "../../util/globalColors";
import useTr from "../../manager/TranslationManager";

const Tab = createBottomTabNavigator();

function renderHomeIcon({ color, size }: { color: string; size: number }) {
  return <FontAwesome5 name="list" size={size} color={color} />;
}

function renderAdminIcon({ color, size }: { color: string; size: number }) {
  return (
    <MaterialIcons name="admin-panel-settings" size={size} color={color} />
  );
}

function renderUserIcon({ color, size }: { color: string; size: number }) {
  return <Feather name="user" size={size} color={color} />;
}

function BottomTabNavigator() {
  const tr = useTr();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: AppColors.darkGray,
        tabBarInactiveTintColor: AppColors.black,
        tabBarStyle: {
          backgroundColor: AppColors.white,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={CourseListScreen}
        options={{
          tabBarIcon: renderHomeIcon,
          tabBarLabel: tr("tabCoursesSection"),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserProfileScreen}
        options={{
          tabBarIcon: renderUserIcon,
          tabBarLabel: tr("tabUserSection"),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: renderAdminIcon,
          tabBarLabel: tr("tabAdminSection"),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
