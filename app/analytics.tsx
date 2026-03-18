import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles } from "@/styles/authStyles";
import { homeStyles } from "@/styles/homeStyles";
import { analyticsStyles } from "@/styles/analyticsStyles";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { PieChart } from "react-native-gifted-charts";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function AnalyticsPage() {
  const pieData = [
    { value: 4325, color: "#EAE0CF", text: "Food" },
    { value: 2450, color: "#94B4C1", text: "Transport" },
    { value: 3125, color: "#547792", text: "Shopping" },
    { value: 2450, color: "#213448", text: "Others" },
  ];
  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.topMainView}>
        <Text style={homeStyles.topText2}>Analytics</Text>
        <View style={homeStyles.topView3}>
          <Image
            source={require("../assets/project-images/bell.png")}
            style={homeStyles.image7}
          />
        </View>
      </View>

      <View style={analyticsStyles.timeFrameView}>
        <View style={analyticsStyles.timeFrameView4}>
          <Text style={analyticsStyles.timeFrameText}>Daily</Text>
        </View>
        <View style={analyticsStyles.timeFrameView1}>
          <Text style={analyticsStyles.timeFrameText}>Week</Text>
        </View>
        <View style={analyticsStyles.timeFrameView2}>
          <Text style={analyticsStyles.timeFrameText}>Month</Text>
        </View>
        <View style={analyticsStyles.timeFrameView3}>
          <Text style={analyticsStyles.timeFrameText}>Year</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={analyticsStyles.spendFrameView}>
          <Text style={analyticsStyles.spendFrameText1}>Total Spent</Text>
          <Text style={analyticsStyles.spendFrameText2}>Rs. 2500.00</Text>
        </View>

        <View style={analyticsStyles.pieChartView}>
          <Text style={analyticsStyles.pieChartText1}>Total Spent</Text>
          <PieChart
            data={pieData}
            donut
            radius={120}
            innerRadius={70}
            textColor="white"
            showGradient
            animationDuration={1500}
            focusOnPress
            sectionAutoFocus
          />
          <View>
            <Text style={analyticsStyles.categoriesViewText1}>Categories</Text>
            <View style={analyticsStyles.categoriesView}>
              <View style={analyticsStyles.categoriesView2}>
                <View style={analyticsStyles.categoriesColor1}></View>
                <Text style={analyticsStyles.categoriesViewText2}>Foods</Text>
              </View>

              <View style={analyticsStyles.categoriesView2}>
                <View style={analyticsStyles.categoriesColor2}></View>
                <Text style={analyticsStyles.categoriesViewText2}>
                  Transport
                </Text>
              </View>

              <View style={analyticsStyles.categoriesView2}>
                <View style={analyticsStyles.categoriesColor3}></View>
                <Text style={analyticsStyles.categoriesViewText2}>
                  Shopping
                </Text>
              </View>

              <View style={analyticsStyles.categoriesView2}>
                <View style={analyticsStyles.categoriesColor4}></View>
                <Text style={analyticsStyles.categoriesViewText2}>Others</Text>
              </View>
            </View>
          </View>

          <View style={analyticsStyles.categoriesView}>
            <View style={analyticsStyles.categoriesView3}>
              <View style={analyticsStyles.categoriesColor1}></View>
              <Text style={analyticsStyles.categoriesViewText3}>Foods</Text>
            </View>
            <View style={analyticsStyles.categoriesView4}>
              <Text style={analyticsStyles.categoriesViewText3}>Rs. 3222.00</Text>
              <Text style={analyticsStyles.categoriesViewText3}>32%</Text>
            </View>
          </View>

          <View style={analyticsStyles.categoriesView}>
            <View style={analyticsStyles.categoriesView3}>
              <View style={analyticsStyles.categoriesColor2}></View>
              <Text style={analyticsStyles.categoriesViewText3}>Transport</Text>
            </View>
            <View style={analyticsStyles.categoriesView4}>
              <Text style={analyticsStyles.categoriesViewText3}>Rs. 2022.00</Text>
              <Text style={analyticsStyles.categoriesViewText3}>22%</Text>
            </View>
          </View>

          <View style={analyticsStyles.categoriesView}>
            <View style={analyticsStyles.categoriesView3}>
              <View style={analyticsStyles.categoriesColor3}></View>
              <Text style={analyticsStyles.categoriesViewText3}>Shopping</Text>
            </View>
            <View style={analyticsStyles.categoriesView4}>
              <Text style={analyticsStyles.categoriesViewText3}>Rs. 3022.00</Text>
              <Text style={analyticsStyles.categoriesViewText3}>28%</Text>
            </View>
          </View>

          <View style={analyticsStyles.categoriesView}>
            <View style={analyticsStyles.categoriesView3}>
              <View style={analyticsStyles.categoriesColor4}></View>
              <Text style={analyticsStyles.categoriesViewText3}>Others</Text>
            </View>
            <View style={analyticsStyles.categoriesView4}>
              <Text style={analyticsStyles.categoriesViewText3}>Rs. 1922.00</Text>
              <Text style={analyticsStyles.categoriesViewText3}>18%</Text>
            </View>
          </View>

        </View>

         <View style={analyticsStyles.spendFrameView}>
          <Text style={analyticsStyles.spendFrameText1}>Total Spent</Text>
          <Text style={analyticsStyles.spendFrameText2}>Rs. 2500.00</Text>
        </View>
        
      </ScrollView>

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
