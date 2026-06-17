// src/screens/HomeScreen.js

import { View, FlatList, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import TaskItem from "../components/TaskItem";

import { toggleTask } from "../store/tasksSlice";

import {useGetTasksQuery, useUpdateTaskMutation} from "../store/tasksApi";

export default function HomeScreen({ navigation }) {
  /* const tasks = useSelector(
    state => state.tasks.tasks
  ); */
  const { data:tasks, isLoading, error } = useGetTasksQuery();


  /* const dispatch = useDispatch(); */

  const [updateTask] = useUpdateTaskMutation();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button
        title="Nueva tarea"
        onPress={() => navigation.navigate("CreateTask")}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() =>
              /* dispatch(toggleTask(item.id)) */
              updateTask({
                id: item.id,
                task: {
                  completed: !item.completed,
                },
              })
            }
          />
        )}
      />
    </View>
  );
}
