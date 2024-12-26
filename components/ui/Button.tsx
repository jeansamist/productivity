import { colors } from "@/constants/colors";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextMedium } from "./Text";

export const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  React.ComponentPropsWithoutRef<typeof TouchableOpacity>
>(({ style, ...props }, ref) => (
  <TouchableOpacity
    style={{ ...styles.button, ...(style as object) }}
    ref={ref}
    {...props}
  >
    {typeof props.children === "string" ? (
      <TextMedium style={styles.buttonLabel}>{props.children}</TextMedium>
    ) : (
      props.children
    )}
  </TouchableOpacity>
));
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    color: colors.background,
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 14,
    color: colors.background,
    textAlign: "center",
    textDecorationLine: "none",
  },
});
Button.displayName = "Button";
