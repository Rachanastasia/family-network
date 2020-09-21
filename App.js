import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from './colors'
import Home from "./home/Home";
import Medications from './medications/Medications';
import NewMed from './medications/NewMed';
import Login from "./Login";
import STORE from './STORE';

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initailRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Medications">
            {props => {
              return (
                <Medications {...props} meds={this.state.user.medications} />
              )
            }
            }</Stack.Screen>
          <Stack.Screen name="NewMed" component={NewMed} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
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

