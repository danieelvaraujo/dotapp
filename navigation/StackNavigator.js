import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";

import DetalhesHeroi from "../screens/DetalhesHeroi";
import ListaHerois from "../screens/ListaHerois";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Lista"}
        screenOptions={{
          headerTitle: () => (
            <FontAwesome name="feed" size={30} color="white" />
          ),
          headerStyle: { backgroundColor: "#800303" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Lista" component={ListaHerois} />
        <Stack.Screen name="Detalhes" component={DetalhesHeroi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
