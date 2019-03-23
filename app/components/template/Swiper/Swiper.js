import React, { Component } from 'react';
import { Image } from 'react-native';
import { Slide, Text } from './style';
import Swiper from 'react-native-swiper';

export default class SwiperScreen extends Component {

	state = {
		dotColor: '#F4AAD0'
	}

	indexChange = (index) => {
		if (index === 0) {
			this.setState({ dotColor: '#F4AAD0' })
		} else if (index === 1) {
			this.setState({ dotColor: '#FFB13B' })
		} else if (index === 2) {
			this.setState({ dotColor: '#99B0FB' })
		}
	}

	render() {
		return (
			<Swiper
				showsButtons={false}
				dotStyle={{ width: 50, height: 8 }}
				activeDotStyle={{ width: 50, height: 8 }}
				dotColor='#EFEFEF'
				activeDotColor={this.state.dotColor}
				onIndexChanged={(index) => this.indexChange(index)}
				loop={false}
			>
				<Slide>
					<Image resizeMode='contain' source={require('../../../images/splash/1.png')} style={{ marginBottom: 40 }} />
					<Text>Agora Disponível na sua Cidade!</Text>
					<Text>O que está esperando para pedir o seu?</Text>
					<Text>Vai em frente experimente!</Text>
				</Slide>

				<Slide>
					<Image resizeMode='contain' source={require('../../../images/splash/2.png')} style={{ marginBottom: 40 }} />
					<Text>Sucos Deliciosos feitos e extraídos dos melhores frutos e que refrescam o seu verão.</Text>
				</Slide>

				<Slide>
					<Image resizeMode='contain' source={require('../../../images/splash/3.png')} style={{ marginBottom: 40 }} />
					<Text>Usuários podem olhar seus sucos favoritos customiza-los e ainda pagar a partir da Suco Wallet.</Text>
				</Slide>

			</Swiper>
		);
	}
}