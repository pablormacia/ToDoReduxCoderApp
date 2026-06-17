import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Header() {
  const tasks = useSelector(
    (state) => state.tasks.tasks
  );

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mis tareas
      </Text>

      <Text style={styles.counter}>
        Pendientes: {pendingTasks}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#2196F3",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },

  counter: {
    marginTop: 4,
    color: "white",
  },
});