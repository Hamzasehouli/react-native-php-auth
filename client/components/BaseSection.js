import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Logo from "../tett.js";

function BaseSection(props) {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={["#9796F0", "#FBC7D4"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.8]}
        style={styles.box}
      >
        <Logo style={styles.logoRight}></Logo>
        <Logo style={styles.logoLeft}></Logo>

        {props.children}
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    overflow: "hidden",
  },
  box: {
    width: 100 + "%",
    height: 100 + "%",
  },

  logoRight: {
    position: "absolute",
    top: -18 + "%",
    right: -18 + "%",
  },
  logoLeft: {
    position: "absolute",
    bottom: -18 + "%",
    left: -18 + "%",
  },
});

export default BaseSection;
