import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { TextBold, TextMedium } from "@/components/ui/Text";
import { colors } from "@/constants/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import { z } from "zod";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export default function LoginView() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data: z.infer<typeof schema>) => console.log(data);
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <TextBold style={styles.title}>Welcome back 👋</TextBold>
        <TextMedium style={styles.subtitle}>Sign in to your account</TextMedium>
      </View>
      <View>
        <Field
          formReturn={form}
          name="email"
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Field
          formReturn={form}
          name="password"
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Enter your password"
        />
        <Button
          style={{ opacity: form.formState.isValid ? 1 : 0.5 }}
          onPress={() => {
            form.handleSubmit(onSubmit)();
          }}
        >
          Sign in
        </Button>
      </View>
      <View style={{ marginTop: 16 }}>
        <TextMedium style={{ color: colors.muted }}>
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <TextBold
              style={{
                color: colors.primary,
                textDecorationLine: "underline",
              }}
            >
              Sign up
            </TextBold>
          </Link>
        </TextMedium>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    flex: 1,
    display: "flex",
    padding: 24,
    paddingTop: 50,
    flexDirection: "column",
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
  },
  header: {
    marginBottom: 32,
    paddingTop: 24,
  },
});
