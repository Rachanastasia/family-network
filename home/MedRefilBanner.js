import React from 'react';
import { View, Text } from 'react-native';
import colors from '../colors';




function MedRefillBanner(props) {

    const mapped = props.meds
        .filter(med => med.hasRefill === false)
        .map((med) => <View key={med.name} style={{
            height: 100,
            padding: 10,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%'
        }}><Text style={{ color: colors.white }}>{med.name}</Text><Text style={{ color: colors.white }}>Before {med.refillBefore}</Text><Text style={{ color: colors.white }}>from Doctor {med.contact}</Text></View>)


    return (
        <View style={{
            backgroundColor: colors.bright,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 20


        }}><Text style={{ color: colors.white, fontSize: 15 }}>Refills: </Text>
            {mapped}
        </View>
    )

}

export default MedRefillBanner;