import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "react-native-login-screen";

export default function Login() {
  return (
    /*<LoginScreen
      spinnerEnable
      spinnerVisibility={spinnerVisibility}
      titleStyle={{
        fontSize: 12,
        color: "#adadad",
        fontFamily: "GoodTimesRg-Regular",
      }}
      logoTextStyle={{
        fontSize: 27,
        color: "#fdfdfd",
        fontFamily: "GoodTimesRg-Regular",
      }}
      loginButtonTextStyle={{
        color: "#fdfdfd",
        fontFamily: "GoodTimesRg-Regular",
      }}
      textStyle={{
        color: "#757575",
        fontFamily: "GoodTimesRg-Regular",
      }}
      signupStyle={{
        color: "#fdfdfd",
        fontFamily: "GoodTimesRg-Regular",
      }}
      onPressLogin={() => {
        setSpinnerVisibility(true);
        setTimeout(() => {
          setSpinnerVisibility(false);
        }, 2000);
      }}
      usernameOnChangeText={(username) => setUsername(username)}
      onPressSettings={() => alert("Settings Button is pressed")}
      passwordOnChangeText={(password) => console.log("Password: ", password)}
    >
      <View
        style={{
          position: "relative",
          alignSelf: "center",
          marginTop: 64,
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>
          Inside Login Screen Component
        </Text>
      </View>*/
    <LoginScreen />
  );
}
