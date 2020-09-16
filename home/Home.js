import React from 'react';
import { View, Text } from 'react-native';

import Overview from './Overview';
import Calendar from './Calendar';
import UpcomingAppts from './UpcomingAppts';
import Medication from './Medication';


function Home(props) {

    //take in data
    //run through hook that filters by most recent date



    //QUESTIONS
    //routing?
    //icon library? react font awesome
    //color variables??
    //one file const.css
    //global variables for colors
    //import to every page used
    //LEARN SASS

    //date formatting
    //UTC 
    //address formatting
    //just strings
    //most companies have rules
    //google api takes in user input and fills in 
    //react native does formatting

    //how to view my console.logs

    //'soft' authentication system
    //get api for contacts 
    //library that is simple to use
    //be associate to account

    //API for medicin
    //dropdown search for users
    //fetch data, run through dropdown
    //DROP DOWN LIBRARY





    //find medical apis

    //APIS
    //medical api
    //google api for address autocomplete

    console.log('HI');


    return (

        <View>

            <UpcomingAppts calendar={props.state.calendar} patient={props.state.patientName} />

            <Medication meds={props.state.medications} patient={props.state.patientName} />
            <Calendar calendar={props.state.calendar} />
        </View >



    )
}


export default Home;