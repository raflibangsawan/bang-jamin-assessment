import React, { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/pages/Welcome/Welcome";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoaded] = useFonts({
    "mul-mid": require("./assets/fonts/Mulish-Medium.ttf"),
    "mul-bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "chi-mid": require("./assets/fonts/Chillax-Medium.ttf"),
    "chi-bold": require("./assets/fonts/Chillax-Semibold.ttf"),
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (isLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplash();
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
