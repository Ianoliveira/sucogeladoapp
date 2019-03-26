import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';
import { Card, Image, Text, TextSubTitle, Borda, ContainerPrice, TextPrice } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { View } from 'react-native';

const ProductView = (props) => {
	return (
		<Card>
			<LinearGradient colors={['#F56086', '#F284D4']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ width: widthPercentageToDP(`70%`), borderRadius: 40, height: heightPercentageToDP(`55%`), alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
			>
				<Image resizeMode='contain' source={require('../../../images/splash/1.png')} />
				<Text>Suco de Melancia</Text>
				<TextSubTitle>200ml, R$5.00</TextSubTitle>
				<Borda />
				<ContainerPrice>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon name='plus-square-o' size={17} color={'#fff'} style={{ marginRight: 15 }} />
						<TextSubTitle>2</TextSubTitle>
						<Icon name='minus-square-o' size={17} color={'#fff'} style={{ marginLeft: 15 }} />
					</View>
					<TextPrice>R$10.00</TextPrice>
				</ContainerPrice>
			</LinearGradient>
		</Card>
	)
}

export default ProductView;