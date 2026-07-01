import { Provider } from "react-redux";

import { store } from "./src/store/store";

import { NavigationContainer } from "@react-navigation/native";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import RootNavigator from "./src/navigation/RootNavigator";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./src/services/firebaseConfig";

import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

import { setUser, clearUser } from "./src/store/authSlice";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        dispatch(clearUser());
        return;
      }

      try {
        const res = await fetch(
          `https://todoreduxcoderapp-default-rtdb.firebaseio.com/users/${firebaseUser.uid}.json`,
        );

        const profile = await res.json();

        dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            photoURL: profile?.photo || null,
          }),
        );
      } catch (err) {
        dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            photoURL: null,
          }),
        );
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    async function setupNotifications() {
      await Notifications.requestPermissionsAsync();

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "Default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }
    }

    setupNotifications();
  }, []);

  return <RootNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </Provider>
  );
}
