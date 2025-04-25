import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseDetailScreen from '../../screens/app/courseDetailScreen';
import CourseHistoricScreen from '../../screens/app/courseHistoricScreen';
import UserProfileScreen from '../../screens/app/userProfileScreen';
import AdminScreen from '../../screens/app/adminScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CourseDetailScreen} />
      <Tab.Screen name="Historic" component={CourseHistoricScreen} />
      <Tab.Screen name="User" component={UserProfileScreen} />
      <Tab.Screen name="Admin" component={AdminScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
