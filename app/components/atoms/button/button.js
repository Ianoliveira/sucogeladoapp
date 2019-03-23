import React from 'react';
import Proptypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Text } from './style';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';

const Button = ({ text, func }) => {
	return (
		<TouchableOpacity onPress={func}>
			<LinearGradient colors={['#F284D4', '#F56086']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ width: widthPercentageToDP('90%'), borderRadius: 40, height: heightPercentageToDP('6%'), alignItems: 'center', justifyContent: 'center' }}
			>
				<Text>{text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

Button.propTypes = {
	/** Text is a string var require to put a label on button */
	text: Proptypes.string.isRequired,
	/**Func is a function var that needs to be a function action for the button */
	func: Proptypes.func.isRequired
}

export default Button;