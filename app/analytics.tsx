import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles } from "@/styles/authStyles";
import { homeStyles } from "@/styles/homeStyles";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { BarChart } from "react-native-chart-kit";

export default function AnalyticsPage() {
  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.topMainView}>
        <View style={homeStyles.topView1}>
          <Image
            source={require("../assets/project-images/user.png")}
            style={homeStyles.image1}
          />
        </View>
        <View style={homeStyles.topView2}>
          <Text style={homeStyles.topText1}>Welcome Back</Text>
          <Text style={homeStyles.topText2}>Hi, Daham</Text>
        </View>
        <View style={homeStyles.topView3}>
          <Image
            source={require("../assets/project-images/bell.png")}
            style={homeStyles.image2}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      ></ScrollView>

      <View style={homeStyles.bottomNavBar}>
        <Pressable onPress={() => router.push("/home")}>
          <Image
            source={require("../assets/project-images/home.png")}
            style={homeStyles.image3}
          />
        </Pressable>
        <Pressable onPress={() => router.push("/analytics")}>
          <Image
            source={require("../assets/project-images/graph.png")}
            style={homeStyles.image3}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/project-images/list.png")}
            style={homeStyles.image3}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
