// src/screens/HomeScreen.js

import {
  View,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import TaskItem from "../components/TaskItem";

import { toggleTask } from "../store/tasksSlice";

import { useGetTasksQuery, useUpdateTaskMutation } from "../store/tasksApi";

export default function HomeScreen({ navigation }) {
  /* const tasks = useSelector(
    state => state.tasks.tasks
  ); */
  const { data: tasks, isLoading, error } = useGetTasksQuery();

  /* const dispatch = useDispatch(); */

  const [updateTask] = useUpdateTaskMutation();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("CreateTask")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

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

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 5,
  },

  fabText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
