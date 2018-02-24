import React from 'react';
import { FlatList, Text, View, TouchableHighlight,TouchableOpacity,StyleSheet,Button } from 'react-native';
import QRCode from 'react-native-qrcode';
import { StackNavigator } from 'react-navigation';

class Settings extends React.Component {

    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <QRCode
                    value={"http://www.cjoshmartin.com"}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
                <Text style={{marginTop:5, fontWeight: "500"}}> Josh Martin </Text>
                <Button
                    title="Scan QR Code"
                    onPress={() => this.props.navigation.navigate('scan_qr')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

import qr_code from './qr_code'
export default StackNavigator({
    Settings: { screen: Settings,
        navigationOptions: { header: null}
    },


    scan_qr: { screen: qr_code,
        navigationOptions: { header: null}
    },

} )
