import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import colors from '../colors'

import Medication from './Medication'

function Medications(props) {
    //filter daily medications

    const dailyMeds = props.meds.filter(med => med.takeDaily === true)

    console.log(props.meds)
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.white,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>


            < Text style={{ fontSize: 25, textAlign: 'center', paddingTop: 15, color: colors.black }}>Medications</Text>
            <TouchableOpacity style={{
                width: "80%",
                backgroundColor: colors.bright,
                borderRadius: 25,
                height: 40,
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    color: "white",
                }}>Add a medication</Text>
            </TouchableOpacity>

            {props.meds.map(med =>
                <Medication med={med} />)}
        </View>
    )
}

export default Medications

//I had scroll view in this componenet but I couldn't
//fully use flexbox
