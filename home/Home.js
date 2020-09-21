import * as React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import STORE from '../STORE';
import Calendar from './Calendar';
import Medication from './MedRefilBanner';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showRefill: false,
            user: STORE
        }
    }

    componentDidMount() {
        const mapped = this.state.user.medications.filter(med => med.hasRefill == false)
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

            <View style={{ width: '100%', height: '100%', display: 'flex' }}>
                <Button onPress={() => this.props.navigation.navigate('Medications')}>
                    Route to medication </Button>
                {
                    this.state.showRefill === true
                        ? <Medication
                            meds={this.state.user.medications}
                            patient={this.state.user.patientName} />
                        : null
                }

                < Calendar calendar={this.state.user.calendar} />
            </View >



        )
    }
}


export default Home;