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
