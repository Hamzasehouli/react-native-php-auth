import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [passwordErr, setPasswordErr] = useState({ state: false, message: "" });
  const [usernameErr, setUsernameErr] = useState({ state: false, message: "" });

  const handleSubmit = async function () {
    setIsLoading(true);
    if (username.trim() === "") {
      setUsernameErr({
        state: true,
        message: "usernameError.message",
      });

      setIsLoading(false);
    } else {
      setUsernameErr({
        state: false,
        message: "",
      });
    }
    if (
      password.trim() === "" ||
      password.trim().length < 8 ||
      password.trim().length > 20
    ) {
      setPasswordErr({
        state: true,
        message: "passwordError.message",
      });

      setIsLoading(false);
    } else {
      setPasswordErr({
        state: false,
        message: "",
      });
    }
    if (usernameErr.state && passwordErr.state) {
      Alert.alert("Please fill the required fields");
      setUsername("");
      setPassword("");
      setIsLoading(false);
      return;
    }
    const body = {
      email: username,
      password: password,
    };

    console.log(body);

    try {
      const res = await fetch("http://172.16.1.52:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        console.log(res.ok);
        const data = await res.json();
        console.log(data.message);
      } else {
        throw new Error(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {!usernameErr.state ? null : <Text>{usernameErr.message}</Text>}
        <TextInput
          keyboardType="email-address"
          onChangeText={(val) => setUsername(val)}
          style={styles.input}
          placeholder="Username"
          value={username}
        ></TextInput>
        {!passwordErr.state ? null : <Text>{passwordErr.message}</Text>}
        <TextInput
          secureTextEntry={true}
          keyboardType="visible-password"
          maxLength={8}
          onChangeText={(val) => setPassword(val)}
          style={styles.input}
          placeholder="Password"
          value={password}
        ></TextInput>

        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.btnOutlined}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {isLoading ? "wait..." : "Log in"}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 20 }}>New to the app?</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, marginLeft: 6 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
