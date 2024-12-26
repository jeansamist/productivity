import { colors } from "@/constants/colors";
import React, { ComponentProps, FunctionComponent } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
export const Input: FunctionComponent<
  ComponentProps<typeof TextInput> & {
    formReturn: UseFormReturn<any>;
    name: string;
  }
> = ({ formReturn, className, name, style, ...props }) => {
  return (
    <Controller
      control={formReturn.control}
      name={name}
      render={({ field: { onBlur, onChange, value } }) => (
        <TextInput
          onBlur={onBlur}
          className={className}
          onChangeText={onChange}
          value={value}
          style={{
            ...styles.input,
          }}
          placeholderTextColor={colors.placeholder}
          {...props}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "PoppinsMedium",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.input,
    fontSize: 14,
    height: 48,
    color: colors.text,
    borderRadius: 8,
  },
});

Input.displayName = "Input";
export default Input;
