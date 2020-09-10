import React from 'react';
import { View, Text } from 'react-native';

function Calendar(props) {

    // let calHeight = 4;

    // if (props.showBanner === true) {
    //     calHeight = 2;
    // } else {
    //     calHeight = 4;
    // }



    return (
        <View style={{
            backgroundColor: 'white',
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Calendar</Text>
        </View>
    )

}

export default Calendar;