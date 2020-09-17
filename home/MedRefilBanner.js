import React from 'react';
import { View, Text } from 'react-native';
import colors from '../colors';
import EachMed from './EachMed'



function MedRefillBanner(props) {

    const mapped = props.meds.filter(med => med.hasRefill === false).map((med, id) => <View key={med.name} styles={{
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        width: 'inherit',
        justifyContent: 'flex-end',
        alignItems: 'center'

    }}><Text styles={{ display: 'inline' }}>{med.name}</Text><Text> by {med.refillBefore}</Text><Text>from Doctor {med.contact}</Text></View>)


    return (
        <View style={{
            backgroundColor: colors.bright,
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}><Text style={{ flex: 1 }}>Refill Soon: </Text>
            {mapped}
        </View>
    )

}

export default MedRefillBanner;