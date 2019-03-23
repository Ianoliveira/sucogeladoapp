import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './style';

const GoogleLoginButton = (props) => {
	return (
		<TouchableOpacity onPress={() => console.warn('[BUTTON] Login Twitter')}>
			<Text>Twitter</Text>
		</TouchableOpacity>
	)
}

export default GoogleLoginButton;