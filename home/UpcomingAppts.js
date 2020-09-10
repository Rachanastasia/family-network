import React from 'react';
import { View, Text } from 'react-native';

function UpcomingAppts(props) {


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