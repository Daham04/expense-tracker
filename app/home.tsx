import { homeStyles } from "@/styles/homeStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
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
    </SafeAreaView>
  );
}
