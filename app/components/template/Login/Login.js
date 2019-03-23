import React, { Component } from 'react';
import { Container, Text, ContainerInput, TextButton, BottomButtonContainer } from './style';
import { TouchableOpacity } from 'react-native';
import Button from '../../atoms/button/button';
import TextInput from '../../atoms/Input/input';
import SocialLoginButtons from '../../atoms/SocialLogins/Buttons';

export default class LoginTemplate extends Component {
	state = {
		textInputOne: '',
		textInputTwo: ''
	}

	render() {
		return (
			<Container>
				<Text>Login</Text>
				<ContainerInput>
					<TextInput placeholder='Nome de Usuário' password={false} value={this.state.textInputOne} onChangeText={(textInputOne) => this.setState({ textInputOne })} />
					<TextInput placeholder='Senha' password={true} value={this.state.textInputTwo} onChangeText={(textInputTwo) => this.setState({ textInputTwo })} />
				</ContainerInput>

				<Button text='Login' func={() => this.props.navigation.navigate('Home')} width={90} height={6} border={40} />

				<SocialLoginButtons />

				<BottomButtonContainer>
					<TouchableOpacity>
						<TextButton>Esqueceu a senha?</TextButton>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.props.navigation.navigate('Singup')}>
						<TextButton>Cadastrar nova Conta?</TextButton>
					</TouchableOpacity>
				</BottomButtonContainer>
			</Container>
		);
	}
}
