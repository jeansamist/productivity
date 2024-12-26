import { colors } from "@/constants/colors";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Label: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
});
