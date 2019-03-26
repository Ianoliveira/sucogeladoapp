import React, { Component } from 'react';
import { Container } from './style'
import ProductItem from '../../Molecules/ProductItem/Product';

class Home extends Component {
	render() {
		return (
			<Container>
				<ProductItem func={() => this.props.navigation.navigate('ProductView')} text='watermelon' price={5.00} color='#FFD5FE' image={require('../../../images/Icons/watermelon.png')} colorGrad={'#F56086'} colorGrad1={'#F284D4'} />
				<ProductItem text='mango' price={5.00} color='#FFD9B1' image={require('../../../images/Icons/mango.png')} colorGrad={'#FD9B8D'} colorGrad1={'#FBBE7E'} />
			</Container>
		);
	}
}

export default Home;