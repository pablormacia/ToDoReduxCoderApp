import { Pressable, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";

import { logoutUser } from "../services/authService";

import { useNavigation } from "@react-navigation/native";


export default function HeaderUser() {
    const navigation = useNavigation();
  const user = useSelector(
    state => state.auth.user
  );

  const openMenu = () => {
    if (!user) {
      navigation.navigate("Login");
      return;
    }

    Alert.alert(
      "Mi cuenta",
      user.email,
      [
        {
          text: "Perfil",
          onPress: () =>
            navigation.navigate(
              "Profile"
            ),
        },

        {
          text: "Cerrar sesión",
          style: "destructive",
          onPress: logoutUser,
        },

        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <Pressable
      onPress={openMenu}
      style={{
        marginRight: 15,
      }}
    >
      <Ionicons
        name="person-circle"
        size={32}
        color="white"
      />
    </Pressable>
  );
}