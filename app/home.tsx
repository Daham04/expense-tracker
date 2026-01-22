import { authStyles } from "@/styles/authStyles";
import { homeStyles } from "@/styles/homeStyles";
import { LinearGradient } from "expo-linear-gradient";
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
              color: (opacity = 1) => `rgba(43, 107, 163, ${opacity})`,
              labelColor: () => "#333",
            }}
            style={{
              marginVertical: 3,
              borderRadius: 16,
              alignSelf: "center",
              borderColor: "rgb(174, 203, 229)",
              borderWidth: 1,
            }}
          />
        </View>

        <View style={homeStyles.view8}>
          <View style={homeStyles.view11}>
            <View style={homeStyles.view13}>
              <Image
                source={require("../assets/project-images/badge.png")}
                style={homeStyles.image4}
              />
            </View>
            <View style={homeStyles.view14}>
              <Text style={homeStyles.topText6}>Top Category</Text>
              <Text style={homeStyles.topText7}>Shopping</Text>
              <Text style={homeStyles.topText6}>Rs. 3,000.00</Text>
            </View>
          </View>

          <View style={homeStyles.view12}>
            <View style={homeStyles.view13}>
              <Image
                source={require("../assets/project-images/moneybag.png")}
                style={homeStyles.image5}
              />
            </View>
            <View style={homeStyles.view14}>
              <Text style={homeStyles.topText6}>Expenses</Text>
              <Text style={homeStyles.topText7}>30</Text>
              <Text style={homeStyles.topText6}>This month</Text>
            </View>
          </View>
        </View>

        <View style={homeStyles.cardView}>
          <Pressable style={authStyles.btn}>
            <LinearGradient
              colors={["#3291B6", "#913b94"]}
              style={authStyles.btnInner}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={authStyles.signInButtonText}>+ Add Expenses</Text>
            </LinearGradient>
          </Pressable>
          <Pressable style={authStyles.btn}>
            <View style={[authStyles.btnInner, authStyles.outlineBtn]}>
              <Text style={authStyles.btnText}>Analytics</Text>
            </View>
          </Pressable>
        </View>

        <Text style={homeStyles.topText8}>Recently Added</Text>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/fastfood.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>Grocery Shopping</Text>
            <Text style={homeStyles.itemCardText2}>Foods</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 3500.00</Text>
          </View>
        </View>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/graduation.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>Books</Text>
            <Text style={homeStyles.itemCardText2}>Education</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 1500.00</Text>
          </View>
        </View>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/shopping.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>New Shoes</Text>
            <Text style={homeStyles.itemCardText2}>Shopping</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 15000.00</Text>
          </View>
        </View>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/movie.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>Movie</Text>
            <Text style={homeStyles.itemCardText2}>Entertainment</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 5000.00</Text>
          </View>
        </View>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/healthcare.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>Medicine</Text>
            <Text style={homeStyles.itemCardText2}>Healthcare</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 1000.00</Text>
          </View>
        </View>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/vehicles.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>Uber</Text>
            <Text style={homeStyles.itemCardText2}>Transport</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 4000.00</Text>
          </View>
        </View>

        <View style={homeStyles.itemCard}>
          <View style={homeStyles.itemCard1}>
            <Image
              source={require("../assets/project-images/transaction.png")}
              style={homeStyles.image6}
            />
          </View>
          <View style={homeStyles.itemCard2}>
            <Text style={homeStyles.itemCardText1}>Water Bill</Text>
            <Text style={homeStyles.itemCardText2}>Bills</Text>
          </View>
          <View style={homeStyles.itemCard3}>
            <Text style={homeStyles.itemCardText3}>- Rs. 2500.00</Text>
          </View>
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
