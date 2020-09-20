import React from 'react';
import { View, ScrollView } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import colors from '../colors';

function Calendar(props) {

    return (
        <ScrollView style={{
            backgroundColor: colors.white
        }}>
            <WeeklyCalendar events={props.calendar} themeColor={colors.bright} />
        </ScrollView>
    )

}

export default Calendar;