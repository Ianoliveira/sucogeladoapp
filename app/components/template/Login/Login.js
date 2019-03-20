import React, { Component } from 'react';
import { Container, Text, ContainerInput } from './style';
import Button from '../../atoms/button/button';
import TextInput from '../../atoms/Input/input';

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

				<Button text='Login' func={() => console.warn(`[LOGIN] ${this.state.textInputOne}\n[PASSWORD] ${this.state.textInputTwo}`)} />
			</Container>
		);
	}
}
