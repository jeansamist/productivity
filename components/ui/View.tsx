import { cn } from "@/lib/utils";
import { ComponentProps, FunctionComponent } from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type ViewProps = ComponentProps<typeof View>;
export const SafeView: FunctionComponent<
  ComponentProps<typeof SafeAreaView>
> = ({ className, style, ...props }) => {
  return (
    <SafeAreaView
      className={cn("flex-1", className)}
      style={{
        paddingTop:
          Platform.OS === "android" && StatusBar.currentHeight
            ? StatusBar.currentHeight - 25
            : 0,
        ...(style as object),
      }}
      {...props}
    />
  );
};
