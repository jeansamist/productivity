import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
// Import your global CSS file
import "../global.css";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    RegularBrush: require("../assets/fonts/Regular Brush.otf"),
  });
  const visibility = NavigationBar.useVisibility();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      // NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("overlay-swipe");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}
