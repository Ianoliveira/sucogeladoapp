import React from 'react';
import { Container } from './style'
import PriceButton from '../../atoms/PriceButton/PriceButton';
import RoundedIcon from '../../atoms/RoundedIcon/RoundedIcon';

const Product = ({ text, price, color, image, colorGrad, colorGrad1 }) => {
	return (
		<Container>
			<PriceButton text={text} price={price} colorGrad={colorGrad} colorGrad2={colorGrad1} />
			<RoundedIcon color={color} image={image} />
		</Container>
	);
}

export default Product;