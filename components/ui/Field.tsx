import React, { ComponentProps } from "react";
import { UseFormReturn } from "react-hook-form";
import { TextInput, View } from "react-native";
import Input from "./Input";
import { Label } from "./Label";

export const Field = ({
  formReturn,
  name,
  label,
  placeholder,
  ...props
}: {
  formReturn: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
} & ComponentProps<typeof TextInput>) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Label>{label}</Label>
      <Input
        formReturn={formReturn}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};
