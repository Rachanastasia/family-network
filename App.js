import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from './colors'
import Home from "./home/Home";
import Medications from './medications/Medications'
import STORE from './STORE'
import Loginscreen from "./Login";

export default class App extends React.Component {
  //still be main componenet
  //login componenet  terniary operator
  //show state based on that

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      user: STORE

    }
  }

  render() {

    return (
      <>
        <Medications meds={this.state.user.medications} />
        {/* {
          (this.state.isLoggedIn === true)
            ? <Home state={this.state.user} />
            : <Loginscreen />
        } */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

