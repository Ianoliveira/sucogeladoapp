import styled from 'styled-components/native';
import normalize from '../../../utils/normalizeFont';
import { widthPercentageToDP } from '../../../utils/responsive';

export const Slide = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
`

export const Text = styled.Text`
	color: #A5A5A5;
	font-size: ${normalize(14)};
	width: ${widthPercentageToDP('80%')};
	text-align: center;
`

export const Jump = styled.TouchableOpacity`
	color: #A5A5A5;
	align-self: center;
	margin-bottom: 10;
`