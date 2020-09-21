import React from 'react';
import { View, ScrollView } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import colors from '../colors';

function Calendar(props) {

    return (
        <ScrollView style={{
            backgroundColor: colors.white,
            width: '100%'
        }}>
            <WeeklyCalendar events={props.calendar} themeColor={colors.bright} style={{ width: '100%' }} />
        </ScrollView>
    )

}

export default Calendar;