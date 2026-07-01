// src/screens/CreateTaskScreen.js

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch
} from "react-native";

import { useState } from "react";

import { useAddTaskMutation } from "../store/tasksApi";

import {scheduleTaskNotification} from "../services/notificationService";

export default function CreateTaskScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [notify, setNotify] = useState(false);

  const [addTask] = useAddTaskMutation();

  const saveTask = async () => {
    if (!title.trim()) return;

    await addTask({
      title,
      completed: false,
    });

    if (notify) {
      await scheduleTaskNotification(title);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva tarea</Text>

      <Text style={styles.label}>Nombre de la tarea</Text>

      <TextInput
        placeholder="Ej: Estudiar RTK Query"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Text style={styles.label}>Notificarme</Text>
        <Switch value={notify} onValueChange={setNotify} />
      </View>

      

      <TouchableOpacity style={styles.button} onPress={saveTask}>
        <Text style={styles.buttonText}>Guardar tarea</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#374151",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,

    elevation: 2,
  },

  button: {
    marginTop: 24,
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
