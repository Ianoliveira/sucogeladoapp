import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './style';

const FacebookLoginButton = (props) => {
	return (
		<TouchableOpacity onPress={() => console.warn('[BUTTON] Login Facebook')}>
			<Text>Facebook</Text>
		</TouchableOpacity>
	)
}

export default FacebookLoginButton;