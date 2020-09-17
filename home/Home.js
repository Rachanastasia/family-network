import React from 'react';
import { View, Text } from 'react-native';

import Overview from './Overview';
import Calendar from './Calendar';
import UpcomingAppts from './UpcomingAppts';
import Medication from './Medication';


function Home(props) {


    console.log('HI');


    return (

        <View>

            //if medication needs refill within 30 days, put at top of screen in medication MedRefillBanner

            <Medication meds={props.state.medications} patient={props.state.patientName} />
            <Calendar calendar={props.state.calendar} />
        </View >



    )
}


export default Home;