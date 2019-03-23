import styled from 'styled-components/native';
import normalize from '../../../utils/normalizeFont';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/responsive';

export const Container = styled.View`
	flex: 1;
	padding-top: ${heightPercentageToDP('10%')};
	align-items: center;
	background-color: #FFFFFF;
`

export const Text = styled.Text`
	color: #747474;
	font-size: ${normalize(16)};
	margin-bottom: ${heightPercentageToDP('18%')};
	font-weight: 200;
`

export const ContainerInput = styled.View`
	margin-bottom: ${heightPercentageToDP('2%')}
`

export const TextButton = styled.Text`
	color: #747474;
	font-size: ${normalize(13)}
`

export const BottomButtonContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: ${widthPercentageToDP('90%')};
	margin-top: ${heightPercentageToDP('20%')};
`