// src/screens/ProfileScreen.js

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import * as ImagePicker from "expo-image-picker";

import { auth } from "../services/firebaseConfig";

import { setUser } from "../store/authSlice";

import { useGetUserQuery, useUpdateUserMutation } from "../store/userApi";

export default function ProfileScreen() {
  const user = useSelector((state) => state.auth.user);

  const uid = user?.uid;

  const { data: profile } = useGetUserQuery(uid, {
    skip: !uid,
  });

  const [updateUser] = useUpdateUserMutation();

  const savePhoto = async (photo) => {
    await updateUser({
      uid,
      data: {
        email: user.email,
        photo,
      },
    });
  };

  const dispatch = useDispatch();

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        quality: 0.3,

        base64: true,
      });

      if (result.canceled) return;

      const image = result.assets[0];

      const base64 = image.base64;

      const photo = `data:image/jpeg;base64,${base64}`;

      await savePhoto(photo);

      dispatch(
        setUser({
          ...user,
          photoURL: photo,
        }),
      );
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      {user?.photoURL ? (
        <Image
          source={{
            uri: user.photoURL,
          }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text>No image</Text>
        </View>
      )}

      <Text style={styles.email}>{user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Cambiar foto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#EF4444" }]}
        onPress={logout}
      >
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  placeholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  email: {
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#3B82F6",
    padding: 14,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
