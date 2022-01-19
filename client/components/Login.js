import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <TouchableOpacity style={styles.btnOutlined}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Log in
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
