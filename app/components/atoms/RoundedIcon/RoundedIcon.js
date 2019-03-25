import React, { Component } from 'react';
import { Image } from 'react-native';
import { Ball } from './style';

const Rounded = ({ color, image }) => {
	return (
		<Ball color={color} >
			<Image resizeMode='contain' source={image} />
		</Ball>
	)
}

export default Rounded;