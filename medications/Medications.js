import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import colors from '../colors'

import Medication from './Medication'

function Medications(props) {
    //filter daily medications
    //filter other medications
    const dailyMeds = props.meds.filter(med => med.takeDaily === true)

    console.log(props.meds)
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ScrollView style={{
                display: 'flex'
            }}>
                < Text style={{ fontSize: 25, textAlign: 'center', paddingTop: 15 }}>Medications</Text>
                {props.meds.map(med =>
                    <Medication med={med} />)}
            </ ScrollView></View>
    )
}

export default Medications
