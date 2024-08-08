import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
