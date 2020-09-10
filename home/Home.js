import React from 'react';
import { View, Text } from 'react-native';

import Overview from './Overview';
import Calendar from './Calendar';
import UpcomingAppts from './UpcomingAppts';
import Medication from './Medication';


function Home(props) {



    return (
        <View style={{
            height: '100%',
            color: '#1f050a'

        }}>
            {props.state.showBanner === true
                ? <Overview closeOverview={props.closeOverview} />
                : <UpcomingAppts calendar={props.state.calendar} patient={props.state.patientName} />}

            <Medication meds={props.state.medications} patient={props.state.patientName} />
            <Calendar showBanner={props.state.showBanner} calendar={props.state.calendar} />


        </View >
        // {
        //     this.state.showBanner === true
        //         ? <Overview />
        //         : ''
        // }

    )
}


export default Home;