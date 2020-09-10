import React from 'react';
import { View, Text } from 'react-native';

function EachMed(props) {

    //I want to be able to :
    //put meds that need refills in next 30 days at top
    //have pink outline around meds that need refill
    //have normal stats and 
    //need refill before Date
    //get from Doctor Smith
    //click on this sends to doctor smith profile

    //filter daily no-refill meds above everything else




    const eachMed = props.meds.map(med => {
        //check date of refill and have this in

        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text>{med.name}</Text>
                <Text>{med.dose}</Text>
                {med.takeDaily === true ? <Text>daily</Text> : null}
                {med.refill === false ? <Text>Need refill from Dr Smith by XXX</Text> : null}
            </View>
        )
    });



    return (
        <View>
            {eachMed}
        </View>
    )
}

export default EachMed;