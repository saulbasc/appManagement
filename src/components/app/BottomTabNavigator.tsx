import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from '../../screens/app/courseListScreen';
import CourseHistoricScreen from '../../screens/app/courseHistoricScreen';
import UserProfileScreen from '../../screens/app/userProfileScreen';
import AdminScreen from '../../screens/app/adminScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={CourseListScreen} />
      <Tab.Screen name="Historic" component={CourseHistoricScreen} />
      <Tab.Screen name="User" component={UserProfileScreen} />
      <Tab.Screen name="Admin" component={AdminScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
