import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useDispatch } from "react-redux";

import BaseSection from "./BaseSection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../store/actions/userActions";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [err, setErr] = useState({ status: true, message: "" });

  const dispatch = useDispatch();

  /////////////////////////////////

  async function handleSubmit() {
    setIsLoading(true);

    const body = {
      email: email,
      password: password,
    };

    if (
      !body.email.trim() ||
      !body.password.trim() ||
      !body.email.trim().includes("@")
    ) {
      setErr({
        status: false,
        message: "Please fill all the required fields with valid inputs",
      });
      setIsLoading(false);
      setTimeout(() => {
        setErr({ status: true, message: "" });
      }, 1500);
      return;
    }

    const res = await fetch(`http://172.16.1.52:8000/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      dispatch(setUser("", data.isLoggedin));
      setErr({ status: false, message: data.message });
      setIsLoading(false);
      setTimeout(() => {
        setErr({ status: true, message: "" });
      }, 1500);
      return;
    }

    setPassword("");
    setEmail("");
    setIsLoading(false);
    // Alert.alert("You have loged in successfully");
    navigation.navigate("Home");
    AsyncStorage.setItem("token", data.token).then(() => console.log("good"));
    dispatch(setUser(data.email, data.isLoggedin));
    // setTimeout(() => {
    // }, 1500);
  }
  ///////////////////////////////////

  if (!err.status) {
    Alert.alert(err.message);
    return <Text></Text>;
  }

  return (
    <BaseSection>
      <View style={styles.container}>
        <View style={styles.form}>
          {/* {!usernameErr.state ? null : <Text>{usernameErr.message}</Text>} */}
          <TextInput
            keyboardType="email-address"
            onChangeText={(val) => setEmail(val)}
            style={styles.input}
            placeholder="Email"
            value={email}
          ></TextInput>
          {/* {!passwordErr.state ? null : <Text>{passwordErr.message}</Text>} */}
          <TextInput
            secureTextEntry={true}
            keyboardType="visible-password"
            maxLength={8}
            onChangeText={(val) => setPassword(val)}
            style={styles.input}
            placeholder="Password"
            value={password}
          ></TextInput>

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.btnOutlined}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 20 }}>
              New to the app?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ fontSize: 20, marginLeft: 6 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BaseSection>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 100 + "%",
    justifyContent: "center",
  },
  input: {
    borderWidth: 0.9,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 6,
    height: 55,
    marginBottom: 20,
    fontSize: 20,
  },
  form: {
    width: 80 + "%",
  },
  btnOutlined: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 6,
    padding: 10,
    color: "white",
    alignItems: "center",
    fontWeight: 700,
    height: 55,
    marginBottom: 20,
  },
});

export default Login;
