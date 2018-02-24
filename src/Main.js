import React from 'react';
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    state = {
        current_balance: 0,
        data:[
            {key: 'Devin', balance: 0, date: '01/05/2017'},
            {key: 'Jackson', balance: 20, date: '02/24/2017'},
            {key: 'James', balance:400, date: '02/24/2017'},
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
                <TouchableOpacity key={i} style={{"backgroundColor":"#90EE90"}}>
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
