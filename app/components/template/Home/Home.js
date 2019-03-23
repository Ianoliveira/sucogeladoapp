import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component {
	render() {
		return (
			<View>
				<Text>Ola mundo</Text>
				<Button onPress={() => this.props.navigation.navigate('Login')} title='Login' />
			</View>
		);
	}
}

export default Home;