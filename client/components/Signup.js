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

import BaseSection from "./BaseSection";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [err, setErr] = useState({ status: true, message: "" });

  /////////////////////////////////

  async function handleSubmit() {
    setIsLoading(true);

    const body = {
      email: email,
      username: username,
      password: password,
    };

    if (
      !body.email.trim() ||
      !body.password.trim() ||
      !body.email.trim().includes("@") ||
      !body.username.trim()
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

    const res = await fetch(`http://172.16.1.52:8000/api/v1/auth/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      setErr({ status: false, message: data.message });
      setIsLoading(false);
      setTimeout(() => {
        setErr({ status: true, message: "" });
      }, 1500);
      return;
    }
    setUsername("");
    setPassword("");
    setEmail("");
    AsyncStorage.setItem("token", data.token).then(() => console.log("good"));
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1500);

    setIsLoading(false);
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
            keyboardType="default"
            onChangeText={(val) => setUsername(val)}
            placeholder="Username"
            value={username}
            style={styles.input}
          ></TextInput>
          {/* {!emailErr.state ? null : <Text>{emailErr.message}</Text>} */}
          <TextInput
            keyboardType="email-address"
            onChangeText={(val) => setEmail(val)}
            placeholder="Email"
            value={email}
            style={styles.input}
          ></TextInput>
          {/* {!passwordErr.state ? null : <Text>{passwordErr.message}</Text>} */}
          <TextInput
            keyboardType="visible-password"
            onChangeText={(val) => setPassword(val)}
            style={styles.input}
            value={password}
            placeholder="Password"
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
                Sign up
              </Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Already registred?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ fontSize: 20, marginLeft: 6 }}>Log in</Text>
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

export default Signup;
