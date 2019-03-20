import styled from 'styled-components/native';
import normalize from '../../../utils/normalizeFont';
import { heightPercentageToDP } from '../../../utils/responsive';

export const Container = styled.View`
	flex: 1;
	margin-top: ${heightPercentageToDP('10%')};
	align-items: center;
	background-color: #FFFFFF;
`

export const Text = styled.Text`
	color: #747474;
	font-size: ${normalize(16)};
	margin-bottom: ${heightPercentageToDP('18%')}
`

export const ContainerInput = styled.View`
	margin-bottom: ${heightPercentageToDP('2%')}
`