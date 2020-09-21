import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../colors';

class Medication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: false
        }
    }
    //every mapped componenet is passed as props here
    //where it can be expanded and showin in reg view
    toggleOpen = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }


    render() {
        return (
            <View style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '75%',
                padding: 10,
                textAlign: 'center'
            }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={this.toggleOpen}
                        style={{
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        <Text style={{ padding: 5, color: colors.black }}>{this.props.med.name}</Text>
                        <Text style={{ padding: 5, color: colors.black }}>{this.props.med.dose}</Text>
                        {this.props.med.takeDaily
                            ? <Text style={{ padding: 5, color: colors.black }}>daily</Text>
                            : null
                        }
                    </TouchableOpacity>
                </View>
                {this.state.expanded === true
                    ? <View>
                        <Text style={{ padding: 5, color: colors.black }}>Refill before {this.props.med.refillBefore}</Text>
                        <Text style={{ padding: 5, color: colors.black }}>Prescribed by Dr.{this.props.med.contact}</Text>
                        {this.props.med.takeWithFood
                            ? <Text>Take with a meal or snack</Text>
                            : null}
                    </View>
                    : null}
            </View>

        )
    }
}

export default Medication;