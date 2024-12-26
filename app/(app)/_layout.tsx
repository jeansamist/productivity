import { useAuth } from "@/hooks/useAuth";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function AppLayout() {
  const { user } = useAuth();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (user === undefined) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (user === null) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(auth)/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
