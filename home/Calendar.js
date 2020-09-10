import React from 'react';
import { View, Text } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';

function Calendar(props) {

    return (
        <View style={{
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 4,
            height: 'inherit',

        }}>
            <WeeklyCalendar events={props.calendar} themeColor='#cd3e59' style={{ height: 'inherit' }} />
        </View>
    )

}

export default Calendar;