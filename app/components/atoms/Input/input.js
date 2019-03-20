import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from './style';

const Input = ({ password, placeholder, value, onChangeText }) => {
	return (
		<View>
			<TextInput
				placeholder={placeholder}
				placeholderColor={'#939393'}
				secureTextEntry={password}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	)
}

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	password: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired
}

export default Input;