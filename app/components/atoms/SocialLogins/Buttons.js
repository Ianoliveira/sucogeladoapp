import React from 'react';
import Google from './Google/google';
import Facebook from './Facebook/facebook';
import Twitter from './Twitter/twitter';
import { Container } from './style';
import { View } from 'react-native';

const Buttons = (props) => {
	return (
		<Container>
			<Google />
			<View style={{ backgroundColor: '#A9A9A9', width: 1 }} />
			<Facebook />
			<View style={{ backgroundColor: '#A9A9A9', width: 1 }} />
			<Twitter />
		</Container>
	)
}

export default Buttons;