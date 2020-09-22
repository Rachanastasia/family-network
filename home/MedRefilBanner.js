import React from 'react';
import { View, Text } from 'react-native';
import colors from '../colors';




function MedRefillBanner(props) {

    const parseDate = (str) => {

        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth();
        let nowDay = now.getDate();

        let year = Number(str.slice(0, 4));
        let month = Number(str.slice(5, 7));
        let day = Number(str.slice(8, 10));

        let newDate = new Date(year, month, day).toString()
        let strDate = newDate.slice(4, 15)//nowYear - year === 0 && nowMonth - month === 0
        console.log(strDate)

    }

    const mapped = props.meds
        .filter(med => med.hasRefill === false)
        .map((med) => {
            let str = med.refillBefore;
            parseDate(str)
            return (
                <View key={med.name} style={{
                    height: 100,
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    width: '100%'
                }}>
                    <Text style={{ color: colors.white }}>{med.name}</Text>
                    <Text style={{ color: colors.white }}>Before </Text>
                    <Text style={{ color: colors.white }}>from Doctor {med.contact}</Text>
                </View>
            )
        })


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