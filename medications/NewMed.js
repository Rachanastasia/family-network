import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import colors from '../colors'
//put the name of a common medication in the phaceholder
class NewMed extends React.Component {
  //TAKE DAILY
  //NUMBER OF REFILLS
  //NEXT REFILL DATE
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Add a new medication</Text>
        <Text>Medication name :</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.inputText}
            placeholder="Medication name"
            placeholderTextColor={colors.black}

          />
        </View>
        <Text>Prescribed by :</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.inputText}
            placeholder="Prescribed By Doctor Jane Smith"
            placeholderTextColor={colors.black}

          />
        </View>
        <Text>Doseage :</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.inputText}
            placeholder="Recommended Dose 4mg daily"
            placeholderTextColor={colors.black}

          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Add medication</Text>
        </TouchableOpacity>

      </View>
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
  logo: {
    fontWeight: "bold",
    fontSize: 28,
    width: '80%',
    color: colors.bright,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: colors.muted,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    fontSize: 16,
    color: colors.black,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: colors.bright,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: colors.white,
  },
});


export default NewMed
