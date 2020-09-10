import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './home/Home';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      patientName: 'Laura',
      patientId: 'x029',
      familyMembers: [
        {
          user: 'laurasmom12',
          userId: 'i83n'
        },
        {
          user: 'laurasdaughter44',
          userId: '7h2g'
        },
        {
          user: 'laurasson99',
          userId: 'l002'
        },
        {
          user: 'laura',
          userId: '77zx'
        }
      ],
      medicalContacts: [
        {
          contact: 'Carol Zimmerman',
          title: 'Doctor',
          spec: 'Oncologist',
          office: {
            name: 'Zimmerman Practice',
            phone: 3129179888,
            address: ' 1234 Milwaukee Ave Chicago IL 60625',
            notes: null
          },
          hospital: {
            name: 'Northwestern Hospital',
            address: '1234 Nowhere Dr Evanston IL 60606',
            affiliatedContacts: [
              'Jim Smith', 'Carol Zimmerman'
            ]
          },
          notes: null
        },
        {
          contact: 'Jim Smith',
          title: 'Doctor',
          spec: 'Primary',
          office: {
            name: 'Smith & Lee Physicans',
            phone: 3129179888,
            address: ' 1234 Milwaukee Ave Chicago IL 60625',
            notes: null
          },
          hospital: {
            name: 'Northwestern Hospital',
            address: '1234 Nowhere Dr Evanston IL 60606',
            affiliatedContacts: [
              'Jim Smith', 'Carol Zimmerman'
            ]
          },
          notes: null
        },
        {
          contact: 'Alice Walker',
          title: 'Nurse',
          spec: 'In-home care',
          office: {
            name: null,
            phone: 3127781000,
            address: null,
            notes: 'Alice comes for eight hours on Tuesdays and Thursdays'
          },
          hospital: null,
          notes: null
        }
      ]
    }
  }



  render() {
    return (
      <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//There should be state in the component that renders the start screen
//if true, show overview
//if false, show main content
