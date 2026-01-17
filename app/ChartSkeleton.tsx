import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function ChartSkeleton() {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((_, index) => (
        <Animated.View
          key={index}
          style={[styles.bar, { opacity }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  bar: {
    width: 30,
    height: Math.random() * 120 + 60,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
  },
});
