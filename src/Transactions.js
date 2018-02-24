
import React from 'react';
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet,Button } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

export default class Transactions extends React.Component {
    static navigationOptions = {
        title: 'Transactions',
    };
    state = {
        data:[],
        id: '',
    }

    componentDidMount() {
        this.setState({data: this.props.navigation.state.params.data})
        this.setState({id:this.props.navigation.state.params.id})
    }
    _renderlistitem({ item })
    {
        let colors = ['#13262F','#B0A084']
        return(
            <Collapsible         >
            <View>
                <Text style={{fontSize: 40, color: 'white'}}> {item.key} </Text>
                <Text style={{fontSize: 40, color: 'white'}}>${item.balance} </Text>
            </View>

        </Collapsible>
        )
    }

     _renderHeader(section) {
    return (
      <View  style={{
                backgroundColor:'#13262f', 
                borderBottomWidth: 5,
                borderColor: 'white',
            }} > 
        <Text style={{fontSize: 40, color: 'white'}}>{section.key}</Text>
        <Text  style={{fontSize: 40, color: 'white'}}>{section.balance}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
  <View  style={{
                backgroundColor:'#13262f', 
            }} >
	<Text style={{fontSize:40}}> This is fake</Text>
      </View>
    );
  }
    render() {
        return (
             <Accordion
        sections={this.state.data}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
        )
    }

}

