// src/components/TaskItem.js

import { Pressable, Text, StyleSheet } from "react-native";

export default function TaskItem({
  task,
  onPress,
}) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          task.completed && styles.completed,
        ]}
      >
        {task.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 8,
  },

  text: {
    fontSize: 18,
  },

  completed: {
    textDecorationLine: "line-through",
  },
});