
import React from 'react';
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet,Button } from 'react-native';


export default class Transactions extends React.Component {
    static navigationOptions = {
	title: 'Transactions',
    };
    state = {
    data:[]
    }

     componentDidMount() {
        this.setState({data: this.props.navigation.state.params.data})
     }
     _renderlistitem({ item })
    {
        let colors = ['#13262F','#B0A084']
        return(
            <TouchableHighlight style={{
                backgroundColor:'#13262f', 
                borderBottomWidth: 5,
                borderColor: 'white',
            }} 
            >
            <View>
                <Text style={{fontSize: 40, color: 'white'}}> {item.key} </Text>
                <Text style={{fontSize: 40, color: 'white'}}> {item.balance} </Text>
            </View>

        </TouchableHighlight>
        )
    }
    render() {
	return (
             <FlatList
                data={this.state.data}
                renderItem={this._renderlistitem.bind(this)}
            />
        )
    }

}

