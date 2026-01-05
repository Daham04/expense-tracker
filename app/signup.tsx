import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles } from "../styles/authStyles";

export default function HomePage() {
  return (
    <SafeAreaView style={authStyles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View>
          <Image
            style={authStyles.logo}
            source={require("../assets/project-images/finflow.png")}
          />

          <Text style={authStyles.title}>Create Account</Text>
          <Text style={authStyles.subtitle}>
            Start tracking your expenses today
          </Text>

          <View style={authStyles.formContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <Text style={authStyles.label}>Full Name</Text>
              <TextInput
                style={authStyles.inputField}
                placeholder="John Doe"
                placeholderTextColor="#999"
              />

              <Text style={authStyles.label}>Email</Text>
              <TextInput
                style={authStyles.inputField}
                placeholder="youremail@example.com"
                placeholderTextColor="#999"
              />

              <Text style={authStyles.label}>Password</Text>
              <TextInput
                style={authStyles.inputField}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                secureTextEntry
              />

              <Text style={authStyles.label}>Confirm Password</Text>
              <TextInput
                style={authStyles.inputField}
                placeholder="Confirm your password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </ScrollView>
          </View>

          <Pressable style={authStyles.forgot}>
            <Text style={authStyles.forgotText}>Forgot Password?</Text>
          </Pressable>

          <Pressable style={authStyles.signInButton}>
            <LinearGradient
              colors={["#3291B6", "#913b94"]}
              style={authStyles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={authStyles.signInButtonText}>Sign Up</Text>
            </LinearGradient>
          </Pressable>

          <View style={authStyles.view1}>
            <Text style={authStyles.Text1}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/")}>
              <Text style={authStyles.Text2}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
