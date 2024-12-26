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
  name: z.string().min(3),
  phone: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});
export default function RegisterView() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (formData: z.infer<typeof schema>) => {
    async function signUpNewUser() {}
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <TextBold style={styles.title}>Join our community</TextBold>
        <TextMedium style={styles.subtitle}>Create an account now</TextMedium>
      </View>
      <View>
        <Field
          formReturn={form}
          name="name"
          label="Fullname"
          placeholder="Enter your full name"
        />
        <Field
          formReturn={form}
          name="phone"
          label="Phone"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
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
          Sign up
        </Button>
      </View>
      <View style={{ marginTop: 16 }}>
        <TextMedium style={{ color: colors.muted }}>
          Already have an account?{" "}
          <Link href="/login">
            <TextBold
              style={{
                color: colors.primary,
                textDecorationLine: "underline",
              }}
            >
              Sign in
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
