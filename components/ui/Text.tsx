import { cn } from "@/lib/utils";
import { ComponentProps, FunctionComponent } from "react";
import { Text } from "react-native";
type TextProps = ComponentProps<typeof Text>;
export const TextBold: FunctionComponent<TextProps> = ({
  style,
  className,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text
      style={{ fontFamily: "PoppinsBold", ...(style as object) }}
      className={cn("font-bold", className)}
      {...props}
    />
  );
};
export const TextSemiBold: FunctionComponent<TextProps> = ({
  style,
  className,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text
      style={{ fontFamily: "PoppinsSemiBold", ...(style as object) }}
      className={cn("font-semibold", className)}
      {...props}
    />
  );
};
export const TextMedium: FunctionComponent<TextProps> = ({
  style,
  className,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text
      style={{ fontFamily: "PoppinsMedium", ...(style as object) }}
      className={cn("font-medium", className)}
      {...props}
    />
  );
};
export const TextRegular: FunctionComponent<TextProps> = ({
  style,
  className,
  ...props
}: ComponentProps<typeof Text>) => {
  return (
    <Text
      style={{ fontFamily: "PoppinsRegular", ...(style as object) }}
      className={cn("font-normal", className)}
      {...props}
    />
  );
};
