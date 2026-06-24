import { Provider } from "react-redux";

import {store} from "./src/store/store";

import { NavigationContainer } from "@react-navigation/native";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import RootNavigator from "./src/navigation/RootNavigator";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./src/services/firebaseConfig";

import {
  setUser,
  clearUser,
} from "./src/store/authSlice";

function AppContent() {
  const dispatch = useDispatch();
  // console.log(auth);
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
    );
  } else {
    dispatch(clearUser());
  }
        }
      );

    return unsubscribe;
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