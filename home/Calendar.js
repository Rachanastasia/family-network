import React from 'react';
import { View, Text } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import colors from '../colors';

function Calendar(props) {

    return (
        <View style={{
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 4,
            height: 'inherit',

        }}>
            <WeeklyCalendar events={props.calendar} themeColor={colors.bright} style={{ height: 'inherit', color: colors.black }} />
        </View>
    )

}

export default Calendar;