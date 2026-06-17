import { Text } from "react-native";
import { useSelector } from "react-redux";

export default function TaskCounter() {
  const tasks = useSelector(
    state => state.tasks.tasks
  );

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