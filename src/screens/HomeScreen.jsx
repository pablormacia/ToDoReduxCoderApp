// src/screens/HomeScreen.js

import { View, FlatList, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import TaskItem from "../components/TaskItem";

import { toggleTask } from "../store/tasksSlice";

import Header from "../components/Header";

export default function HomeScreen({
  navigation,
}) {
  const tasks = useSelector(
    state => state.tasks.tasks
  );

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button
        title="Nueva tarea"
        onPress={() =>
          navigation.navigate("CreateTask")
        }
      />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() =>
              dispatch(toggleTask(item.id))
            }
          />
        )}
      />
    </View>
  );
}