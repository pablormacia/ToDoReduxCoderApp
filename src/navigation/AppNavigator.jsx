// src/navigation/AppNavigator.js

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CreateTaskScreen from "../screens/CreateTaskScreen";
import TaskCounter from "../components/TaskCounter";

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Mis tareas",
            headerRight: () => <TaskCounter />,
          }}
        />

        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{
            title: "Nueva tarea",
            headerRight: () => <TaskCounter />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}