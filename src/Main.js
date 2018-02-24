import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet,Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
	title: 'Welcome',
    };
    state = {
	current_balance: 0,
	data:[
	    {id: 122134, key: 'Devin', balance: 0, date: '01/05/2017'},
	    {id: 122135, key: 'Jackson', balance: 20, date: '02/24/2017'},
            {id:  122136, key: 'James', balance:400, date: '02/24/2017'},
	],
    }

    render(){
	const accounts = this.state.data.map((list, i)=>{
	    return (
		<TouchableOpacity key={i} style={{"backgroundColor":"#90EE90"}}>
		    <View style={{"marginBottom":5,"paddingLeft":5,flexDirection: 'row'}}>
			<Text style={{ "fontSize": 20}} >{list.key} </Text>
			<Text style={{alignSelf: 'flex-end',}}>{list.date}</Text>
		    </View>
		    <Text> ${list.balance} </Text>
		</TouchableOpacity>
	    )
	}) 
	const transactions = this.state.data.map((list, i)=>{
	    return (
                <TouchableOpacity key={i} style={{"backgroundColor":"#90EE90"}} onPress={()=>{this.props.navigation.navigate("Transaction",{data: this.state.data, id: list.id})}}>
		    <View style={{"marginBottom":5,"paddingLeft":5,flexDirection: 'row'}}>
			<Text style={{ "fontSize": 20}} >{list.key} </Text>
			<Text style={{alignSelf: 'flex-end',}}>{list.date}</Text>
		    </View>
		    <Text> ${list.balance} </Text>
		</TouchableOpacity>
	    )
	}) 
	return (
	    <View>
		<View style={{"flex": 3,flexDirection: 'column',  alignItems: 'center',}}>
		    <Text style={{"paddingTop": 5,}}/>
		    <Text style={styles.title} > Account Balance: </Text>
		    <Text style={styles.title}>${this.state.current_balance}</Text>
		</View>

		<View style={{"paddingTop":200}}>
		    <Text style={styles.subtitle}>Transaction History</Text>
		    {transactions}
		</View>
		<View style={{"paddingTop":20}}>
		    <Text style={styles.subtitle}>Accounts</Text>
		    {accounts}
		</View>
	    </View>
	);
    }
}

var styles = StyleSheet.create({

    title:{
	fontSize: 30,
    },
    subtitle:{
	"paddingLeft":5,
	"fontWeight":"bold",
	"fontSize":15,
	"marginBottom": 5
    }

})

import  Settings from './Settings.js'
import  Transactions from './Transactions.js'
import 
export default TabNavigator(
    {
	Home: { screen: HomeScreen }, // test can be stackNavs as well
        Transaction: { screen: Transactions},
	Settings: { screen: Settings },
    },
    {
	navigationOptions: ({ navigation }) => ({
	    tabBarIcon: ({ focused, tintColor }) => {
		const { routeName } = navigation.state;
		let iconName;
		if (routeName === 'Home') {
		    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
		} else if (routeName === 'Settings') {
		    iconName = `ios-options${focused ? '' : '-outline'}`;
		}

		return <Ionicons name={iconName} size={25} color={tintColor} />;
	    },
	}),
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	tabBarOptions: {
	    activeTintColor: 'tomato',
	    inactiveTintColor: 'gray',
	},
	animationEnabled: true,
	swipeEnabled: false,
    }
);

