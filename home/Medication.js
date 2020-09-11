import React from 'react';
import { View, Text } from 'react-native';

import EachMed from './EachMed'



function Medication(props) {
    //make (HOOK???) that filters medications by importance
    //returns filtered array
    //pass in array of three to EachMed
    //have expanded view where user can click and see all medications



    return (
        <View style={{
            backgroundColor: '#feabbd',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 16,
                padding: 10
            }}>{props.patient}'s Medications</Text>
            <EachMed meds={props.meds} />
        </View>
    )

}

export default Medication;