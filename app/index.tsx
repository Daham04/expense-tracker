import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function HomePage() {

  const [fontLoaded] = useFonts ({
    "Poppins-Bold": require ("../assets/fonts/poppins-bold.ttf"),
    "Poppins-Regular": require ("../assets/fonts/poppins-regular.ttf"),
  });

  if(!fontLoaded){
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/project-images/finflow.png")} />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7ed",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 23,
    fontFamily: "Poppins-Bold",
    color: "#3291B6",
    marginTop: 8,
  },
  logo:{
    width: 100,
    height: 100,
  },
  subtitle:{
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
});
