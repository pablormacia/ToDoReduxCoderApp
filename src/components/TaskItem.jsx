import {
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";

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
          styles.title,
          task.completed &&
            styles.completedTitle,
        ]}
      >
        {task.title}
      </Text>

      <View
        style={[
          styles.badge,
          task.completed
            ? styles.completedBadge
            : styles.pendingBadge,
        ]}
      >
        <Text style={styles.badgeText}>
          {task.completed
            ? "Completada"
            : "Pendiente"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  completedTitle: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },

  badge: {
    marginTop: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  pendingBadge: {
    backgroundColor: "#DBEAFE",
  },

  completedBadge: {
    backgroundColor: "#DCFCE7",
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
});