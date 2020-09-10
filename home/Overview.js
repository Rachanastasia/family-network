import React from 'react';
import { Text, View } from 'react-native';

function Overview(props) {

    //if any medications have been added in the last 14 days
    //if any appointments have been made


    return (
        <View style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <Text
                style={{
                    fontSize: 20,
                    alignSelf: 'flex-end'
                }}
                onClick={props.closeOverview}
            >X</Text>
            <Text>Overview</Text>
        </View>
    )
}

export default Overview;