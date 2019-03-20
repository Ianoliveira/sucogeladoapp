import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './style';

const GoogleLoginButton = (props) => {
	return (
		<TouchableOpacity onPress={() => console.warn('[BUTTON] Login Google')}>
			<Text>Google</Text>
		</TouchableOpacity>
	)
}

export default GoogleLoginButton;