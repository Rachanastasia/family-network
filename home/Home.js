import React from 'react';
import { View, Text } from 'react-native';

import Overview from './Overview';
import Calendar from './Calendar';
import UpcomingAppts from './UpcomingAppts';
import Medication from './MedRefilBanner';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showRefill: false
        }
    }

    componentDidMount() {
        const mapped = this.props.state.medications.filter(med => med.hasRefill == false)
        if (mapped.length > 0) {

            return this.setRefill(true)
        }
        return this.setRefill(false)
    }

    setRefill(val) {
        this.setState({
            showRefill: val
        })
    }

    render() {

        return (

            <View>
                { this.state.showRefill === true
                    ? <Medication meds={this.props.state.medications} patient={this.props.state.patientName} />
                    : <Text>No Medication</Text>
                }
                <Calendar calendar={this.props.state.calendar} />
            </View >



        )
    }
}


export default Home;