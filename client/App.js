import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Tempo from "./components/Tempo";
import Restricted from "./components/Restricted";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSelector, useDispatch } from "react-redux";

import { setUser } from "./store/actions/userActions";

const Stack = createNativeStackNavigator();

function App(props) {
  const user = useSelector((state) => state.user);
  const [isLoggedin, setIsloggedin] = useState();
  const [isTempo, setIsTempo] = useState(false);

  const dispatch = useDispatch();

  // return (
  //   <View style={styles.screen}>
  //     <LinearGradient
  //       colors={["#9796F0", "#FBC7D4"]}
  //       start={{ x: 1, y: 0 }}
  //       end={{ x: 0, y: 1 }}
  //       locations={[0, 0.8]}
  //       style={styles.box}
  //     >
  //       <Logo style={styles.logoRight}></Logo>
  //       <Logo style={styles.logoLeft}></Logo>

  //       <Login></Login>
  //       {/* <Signup></Signup> */}
  //       {/* <Home></Home> */}
  //     </LinearGradient>
  //   </View>
  // );

  useEffect(() => {
    setIsTempo(true);
    setTimeout(() => {
      setIsTempo(false);
    }, 2000);
    AsyncStorage.getItem("token").then((token) => {
      if (!token) return;
      fetch(`http://172.16.1.52:8000/api/v1/auth/protect`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ jwt: `jwt=${token}` }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setUser(data.email, data.isLoggedin));
        });
    });
  }, []);
  if (isTempo) {
    return <Tempo></Tempo>;
  }

  return (
    <NavigationContainer style={styles.screen}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          options={{ title: "Home", headerShown: false }}
          name="Home"
          component={!user.isLoggedin ? Home : Restricted}
        />
        <Stack.Screen
          options={{ title: "Signup" }}
          name="Signup"
          component={!user.isLoggedin ? Signup : Restricted}
        />
        <Stack.Screen
          options={{ title: "Login" }}
          name="Login"
          component={!user.isLoggedin ? Login : Restricted}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
