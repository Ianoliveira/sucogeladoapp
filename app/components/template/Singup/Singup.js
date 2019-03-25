import React, { Component } from 'react';
import { Container, TextTitle, ContainerInput, BottomButton, Text } from './style';
import Input from '../../atoms/Input/input';
import Button from '../../atoms/button/button';
import SocialLogins from '../../atoms/SocialLogins/Buttons';

class SingUp extends Component {
	render() {
		return (
			<Container>
				<TextTitle>Criar uma nova Conta</TextTitle>

				<ContainerInput>
					<Input placeholder='Nome' password={false} onChangeText={console.warn('ola')} />
					<Input placeholder='Email' password={false} onChangeText={console.warn('ola')} />
					<Input placeholder='Celular' password={false} onChangeText={console.warn('ola')} />
					<Input placeholder='Crie uma Senha' password={true} onChangeText={console.warn('ola')} />
				</ContainerInput>
				<Button text='Registre' func={() => this.props.navigation.navigate('Home')} width={90} height={6} border={40} />
				<SocialLogins />

				<BottomButton>
					<Text>Já tem conta? Clique aqui para Login</Text>
				</BottomButton>
			</Container>
		);
	}
}

export default SingUp;