import React from 'react';
import { View, Text } from 'react-native';

import Overview from './Overview';
import Calendar from './Calendar';
import UpcomingAppts from './UpcomingAppts';
import Medication from './Medication';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBanner: true,
        }
    }

    render() {
        return (
            <View style={{
                height: '100%',

            }}>
                {this.state.showBanner === true ? <Overview /> : null}
                <UpcomingAppts />
                <Medication />
                <Calendar showBanner={this.state.showBanner} />


            </View >
            // {
            //     this.state.showBanner === true
            //         ? <Overview />
            //         : ''
            // }

        )
    }
}