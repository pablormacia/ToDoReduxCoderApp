// src/screens/CreateTaskScreen.js

import {
  View,
  TextInput,
  Button,
} from "react-native";

import { useState } from "react";

import { useDispatch } from "react-redux";

import { addTask } from "../store/tasksSlice";

export default function CreateTaskScreen({
  navigation,
}) {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const saveTask = () => {
    if (!title.trim()) return;

    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        completed: false,
      })
    );

    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
        }}
      />

      <Button
        title="Guardar"
        onPress={saveTask}
      />
    </View>
  );
}