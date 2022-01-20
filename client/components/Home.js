import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import Wave from "../wave.js";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Wave style={styles.wave}></Wave>
      </View>
      <View style={{ top: "45%" }}>
        <Text style={styles.home}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 100 + "%",
    // justifyContent: "center",
    width: "100%",
  },
  box: { position: "relative", width: "100%" },
  wave: {
    position: "absolute",
    top: 0,
    width: "100%",
    right: 0,
    left: 0,
  },
  home: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
