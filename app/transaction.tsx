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
import { homeStyles } from "@/styles/homeStyles";
import { transactionStyles } from "@/styles/transactionStyles";
import { analyticsStyles } from "@/styles/analyticsStyles";

export default function HomePage() {
  return (
    <SafeAreaView style={authStyles.container}>
      <View style={homeStyles.topMainView}>
        <Text style={homeStyles.topText2}>Transactions</Text>
        <View style={homeStyles.topView3}>
          <Image
            source={require("../assets/project-images/bell.png")}
            style={homeStyles.image7}
          />
        </View>
      </View>

      <View style={transactionStyles.searchBar}>
        <TextInput
          style={transactionStyles.searchTextInput}
          placeholder="Search transactions"
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

          <Text style={transactionStyles.timeFrameText}>Today</Text>

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

          <Text style={transactionStyles.timeFrameText}>Yesterday</Text>

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
        <Pressable onPress={() => router.push("/transaction")}>
          <Image
            source={require("../assets/project-images/list.png")}
            style={homeStyles.image3}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
