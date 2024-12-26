import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
};

export default AuthLayout;
