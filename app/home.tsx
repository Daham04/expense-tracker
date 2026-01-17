import { authStyles } from "@/styles/authStyles";
import { homeStyles } from "@/styles/homeStyles";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

export default function HomePage() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const TARGET_DATA = [50, 10, 15, 20, 30, 25];

  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ data: [0, 0, 0, 0, 0, 0] }],
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();

    const listener = animatedValue.addListener(({ value }) => {
      const animatedData = TARGET_DATA.map((v) => Math.round(v * value));

      setChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{ data: animatedData }],
      });
    });

    return () => animatedValue.removeListener(listener);
  }, []);

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
      >
        <LinearGradient
          colors={["#5693adff", "#af56b3ff", "#44829cff"]}
          style={homeStyles.balanceCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={homeStyles.topText5}>Total Spending</Text>
          <Text style={homeStyles.topText3}>Rs. 45,000.00</Text>
          <Text style={homeStyles.topText5}>+2.5% this week</Text>
          <View style={homeStyles.line} />
          <View style={homeStyles.view5}>
            <View style={homeStyles.view6}>
              <Text style={homeStyles.topText5}>Weekly Spending</Text>
              <Text style={homeStyles.topText4}>Rs. 12,000.00</Text>
            </View>
            <View style={homeStyles.view7}>
              <Text style={homeStyles.topText5}>Monthly Spending</Text>
              <Text style={homeStyles.topText4}>Rs. 45,000.00</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={homeStyles.view8}>
          <View style={homeStyles.view9}>
            <Text style={homeStyles.topText6}>Today</Text>
            <Text style={homeStyles.topText7}>Rs. 1,000.00</Text>
          </View>
          <View style={homeStyles.view10}>
            <Text style={homeStyles.topText6}>January</Text>
            <Text style={homeStyles.topText7}>Rs. 12,000.00</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        ></ScrollView>
        <View>
          <Text style={homeStyles.topText8}>Monthly Spending</Text>
          <BarChart
            data={chartData}
            width={screenWidth - 20}
            height={220}
            yAxisLabel="Rs."
            yAxisSuffix="K"
            fromZero
            withInnerLines={false}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(175, 86, 179, ${opacity})`,
              labelColor: () => "#333",
            }}
            style={{
              marginVertical: 3,
              borderRadius: 16,
              alignSelf: "center",
              borderColor: "rgb(241, 221, 245)",
              borderWidth: 1,
            }}
          />
        </View>

        <View style={homeStyles.view8}>
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
          <Pressable style={authStyles.signInButton}>
            <LinearGradient
              colors={["#3291B6", "#913b94"]}
              style={authStyles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={authStyles.signInButtonText}>Add Expenses</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>

      <View style={homeStyles.bottomNavBar}>
        <Image
          source={require("../assets/project-images/home.png")}
          style={homeStyles.image3}
        />
        <Image
          source={require("../assets/project-images/graph.png")}
          style={homeStyles.image3}
        />
        <Image
          source={require("../assets/project-images/list.png")}
          style={homeStyles.image3}
        />
      </View>
    </SafeAreaView>
  );
}
