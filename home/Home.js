import React from 'react';
import { View, Text } from 'react-native';

import Overview from './Overview';
import Calendar from './Calendar';
import UpcomingAppts from './UpcomingAppts';
import Medication from './Medication';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showRefill: false
        }
    }

    checkForRefills = (arr) => {
        const mapped = arr.filter(med => med.hasRefill === false)

    }

    render() {
        return (

            <View>
                { this.state.showRefill === true
                    ? <Medication meds={this.props.state.medications} patient={props.state.patientName} />
                    : null
                }
                <Calendar calendar={this.props.state.calendar} />
            </View >



        )
    }
}


export default Home;