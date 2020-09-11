import React from 'react';
import { View, Text } from 'react-native';

function UpcomingAppts(props) {

    //FUNCTIONALITY
    //filter array of appointments and sort by date
    //get arr[0] of new array
    //this will get the next appointment
    //MAKE HOOK THAT FILTERS ARRAY OF APPOINTMENTS? 
    //NEEDS TO BE USED AT LEAST TWO PLACES



    return (
        <View style={{

            backgroundColor: '#cd3e59',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            color: '#1f050a'
        }}>
            <Text>{props.patient}'s next appointment:</Text>
        </View>
    )

}

export default UpcomingAppts;