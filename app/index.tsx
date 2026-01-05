import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePage() {
  const [fontLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/poppins-bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/poppins-regular.ttf"),
  });

  if (!fontLoaded) {
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Logo and Titles */}
        <Image
          style={styles.logo}
          source={require("../assets/project-images/finflow.png")}
        />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        {/* Input Fields */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="youremail@example.com"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />

        {/* Forgot Password and Sign In Button */}
        <Pressable style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </Pressable>
        <Pressable style={styles.signInButton}>
          <LinearGradient
            colors={["#3291B6", "#913b94ff"]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </LinearGradient>
        </Pressable>

        {/* Sign Up Section */}
        <View style={styles.view1}>
          <Text style={styles.Text1}>Don't have an account?</Text>
          <Pressable>
            <Text style={styles.Text2}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7ed",
    justifyContent: "center",
  },
  title: {
    fontSize: 23,
    fontFamily: "Poppins-Bold",
    color: "#3291B6",
    marginTop: 8,
    alignSelf: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    alignSelf: "center",
  },
  label: {
    fontFamily: "Poppins-Regular",
    marginLeft: 25,
    marginTop: 20,
    fontSize: 14,
    color: "#646366ff",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#808081ff",
    borderRadius: 18,
    padding: 12,
    marginRight: 25,
    marginLeft: 25,
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    marginTop: 8,
  },
  forgot: {
    alignSelf: "flex-end",
    marginRight: 25,
    marginTop: 13,
  },
  forgotText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#3291B6",
  },
  signInButton: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  gradient: {
    borderRadius: 18,
    padding: 12,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  view1: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: "center",
  },
  Text1: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    marginRight: 5,
  },
  Text2: {
    fontFamily: "Poppins-Bold",
    fontSize: 13,
    color: "#3291B6",
  },
});
