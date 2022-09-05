import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "EVENTS" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: "DETAILS" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
