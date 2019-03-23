import styled from 'styled-components';
import normalize from '../../../utils/normalizeFont';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/responsive';

export const Container = styled.View`
	flex: 1;
	padding-top: ${heightPercentageToDP('10%')};
	align-items: center;
	background-color: #FFFFFF;
`

export const TextTitle = styled.Text`
	color: #747474;
	font-size: ${normalize(16)};
	margin-bottom: ${heightPercentageToDP('10%')};
	font-weight: 200;
`
export const ContainerInput = styled.View`
	margin-bottom: ${heightPercentageToDP('2%')}
`

export const BottomButton = styled.TouchableOpacity`
	margin-top: ${heightPercentageToDP('10%')};
`

export const Text = styled.Text`
	color: #747474;
	font-size: ${normalize(13)};
`