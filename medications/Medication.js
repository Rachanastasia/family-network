import React, { Component } from 'react';
import { View, Text } from 'react-native'

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
                width: '100%',
                padding: 10
            }}
                onClick={this.toggleOpen}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ padding: 5 }}>{this.props.med.name}</Text>
                    <Text style={{ padding: 5 }}>{this.props.med.dose}</Text>
                    {this.props.med.takeDaily
                        ? <Text style={{ padding: 5 }}>daily</Text>
                        : null
                    }
                </View>
                {this.state.expanded === true
                    ? <View>
                        <Text>Refill before {this.props.med.refillBefore}</Text>
                        <Text>Prescribed by Dr.{this.props.med.contact}</Text>
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