import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Home from "./components/Home";
import Logo from "./tett.js";

function App(props) {
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

        {/* <Login></Login> */}
        {/* <Signup></Signup> */}
        <Home></Home>
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

export default App;
