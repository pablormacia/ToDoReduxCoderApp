import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../store/tasksApi";

export default function TaskCounter() {
  /* const tasks = useSelector(
    state => state.tasks.tasks
  ); */

  const { data:tasks=[], isLoading, error } = useGetTasksQuery();


  const pendingTasks = tasks.filter(
    task => !task.completed
  ).length;

  return (
    <Text
      style={{
        marginRight: 15,
        fontWeight: "bold",
      }}
    >
      {pendingTasks}
    </Text>
  );
}