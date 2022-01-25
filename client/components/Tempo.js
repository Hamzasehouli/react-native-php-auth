import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import BaseSection from "./BaseSection.js";

import Wave from "../wave.js";

function Tempo({ navigation }) {
  return (
    <BaseSection>
      <View style={styles.container}>
        {/* <View style={styles.box}>
          <Wave style={styles.wave}></Wave>
        </View>
        <View style={{ top: "45%", marginBottom: 20 }}>
          <Text style={styles.Tempo}>Welecome</Text>
        </View>
        <View style={{ top: "45%" }}>
          <TouchableOpacity
            style={{ ...styles.btnEmpty, marginBottom: 13 }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ fontSize: 20, marginLeft: 6 }}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnEmpty}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontSize: 20, marginLeft: 6 }}>Log in</Text>
          </TouchableOpacity>
          <View></View>
        </View> */}
        <Text style={styles.textStyle}>Welcome</Text>
      </View>
    </BaseSection>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 100 + "%",
    // justifyContent: "center",
    width: "100%",
    backgroundColor: "beige",
    justifyContent: "center",
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
  btnEmpty: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 4,
  },
  textStyle: { fontSize: 50, color: "grey" },
});

export default Tempo;
