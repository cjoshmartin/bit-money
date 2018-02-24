import React from 'react';
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet,Button } from 'react-native';


export default class Settings extends React.Component {

    static navigationOptions = {
	title: 'Settings',
    };
    render() {
	return (
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Button
		    title="Go to Home"
		    onPress={() => this.props.navigation.navigate('Home')}
		/>
		<Button
		    title="Go to Details"
		    onPress={() => this.props.navigation.navigate('Details')}
		/>
	    </View>
	);
    }
}
