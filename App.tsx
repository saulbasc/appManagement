import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BarView from "./src/components/bar/BarView";
import { navigationRef } from "./src/navigationRef";
import AppStackNavigator from "./src/components/global/AppStackNavigator";
import InitManager from "./src/core/initManager";
import { Provider as CourseProvider } from "./src/context/CourseDaoContext";
import { Provider as InscriptionProvider } from "./src/context/InscriptionDaoContext";
import { Provider as ValorationProvider } from "./src/context/ValorationDaoContext";
import { Provider as UserProvider } from "./src/context/UserDaoContext";

export default function App() {
  InitManager();
  return (
    <ValorationProvider>
      <UserProvider>
        <InscriptionProvider>
          <CourseProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <BarView />
              <NavigationContainer ref={navigationRef}>
                <AppStackNavigator />
              </NavigationContainer>
            </SafeAreaView>
          </CourseProvider>
        </InscriptionProvider>
      </UserProvider>
    </ValorationProvider>
  );
}
