import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { authStyles } from "../styles/authStyles";
import { router } from "expo-router";

export default function HomePage() {
  return (
    <SafeAreaView style={authStyles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Image
              style={authStyles.logo}
              source={require("../assets/project-images/finflow.png")}
            />

            <Text style={authStyles.title}>Welcome Back</Text>
            <Text style={authStyles.subtitle}>Sign in to continue</Text>

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

            <Pressable style={authStyles.forgot}>
              <Text style={authStyles.forgotText}>Forgot Password?</Text>
            </Pressable>

            <Pressable onPress={()=> router.replace("/home")} style={authStyles.signInButton}>
              <LinearGradient
                colors={["#3291B6", "#913b94"]}
                style={authStyles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={authStyles.signInButtonText}>Sign In</Text>
              </LinearGradient>
            </Pressable>

            <View style={authStyles.view1}>
              <Text style={authStyles.Text1}>Don't have an account?</Text>
              <Pressable onPress={() => router.push("/signup")}>
                <Text style={authStyles.Text2}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
