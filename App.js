import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from './colors'
import Home from "./home/Home";

import STORE from './STORE'
import Loginscreen from "./Login";

export default class App extends React.Component {
  //still be main componenet
  //login componenet  terniary operator
  //show state based on that

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: STORE

    }
  }

  //lifecycle method to 
  //reset user always if not logged in




  render() {

    //Place login componenet after Home
    //instead of Text Login
    return (
      <>
        {
          (this.state.isLoggedIn === true)
            ? <Home state={this.state.user} />
            : <Loginscreen />
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    color: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

//There should be state in the component that renders the start screen
//if true, show overview
//if false, show main content
