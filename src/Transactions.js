
import React from 'react';
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet,Button } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

export default class Transactions extends React.Component {
    static navigationOptions = {
        title: 'Transactions',
    };
    state = {
	data:[
	    {id: 122134, key: 'Devin', balance: 0, date: '01/05/2017'},
	    {id: 122135, key: 'Jackson', balance: 20, date: '02/24/2017'},
            {id:  122136, key: 'James', balance:400, date: '02/24/2017'},
	],
        id: '',
    }

    componentDidMount() {
	//if(this.props)
	    if(this.props.navigation)
		if(this.props.navigation.state)
		    if(this.props.navigation.state.params)	
			if (this.props.navigation.state.params.data)
			{
			    this.setState({data: this.props.navigation.state.params.data})
			    this.setState({id:this.props.navigation.state.params.id})
			}
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
	<Text style={{fontSize:40, color:"white"}}> This is fake</Text>
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

