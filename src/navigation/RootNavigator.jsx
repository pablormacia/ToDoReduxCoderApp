// src/navigation/RootNavigator.js

import { useSelector } from "react-redux";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

export default function RootNavigator() {
  const user = useSelector(
    (state) => state.auth.user
  );

  const loading = useSelector(
    (state) => state.auth.loading
  );

  if (loading) {
    return null;
  }

  return user
    ? <AppStack />
    : <AuthStack />;
}