import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/atoms/button/button';
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button text='Login' func={() => console.warn('ola mundo')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
