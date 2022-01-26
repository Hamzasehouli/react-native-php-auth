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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../store/actions/userActions";
import Wave from "../wave.js";
import { useDispatch, useSelector } from "react-redux";

function Restricted({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <BaseSection>
      <View style={styles.container}>
        <View style={styles.box}>
          <Wave style={styles.wave}></Wave>
        </View>
        {/* <View style={{ top: "45%", marginBottom: 20 }}>
          <Text style={styles.home}>Home</Text>
        </View> */}
        <View style={{ top: "45%" }}>
          <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>
            Welcome {user.email}
          </Text>
        </View>
        <View style={{ top: "45%" }}>
          <TouchableOpacity
            style={styles.btnEmpty}
            onPress={() => {
              AsyncStorage.setItem("token", "").then(() => {
                dispatch(setUser("", false));
                navigation.navigate("Login");
              });
            }}
          >
            <Text style={{ fontSize: 20, marginLeft: 6 }}>Log out</Text>
          </TouchableOpacity>
        </View>
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
});

export default Restricted;
