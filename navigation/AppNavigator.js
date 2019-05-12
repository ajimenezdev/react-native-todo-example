import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainScreen from "todoList/screens/main";
import EditScreen from "todoList/screens/editTodo";

export default createAppContainer(
  createStackNavigator(
    {
      Main: { screen: MainScreen },
      Edit: { screen: EditScreen }
    },
    {
      initialRouteName: "Main",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#0066ff"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  )
);
