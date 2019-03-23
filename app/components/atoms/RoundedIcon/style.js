import styled from 'styled-components';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';

export const Ball = styled.View`
	background-color: ${props => props.color};
	height: ${heightPercentageToDP('10%')};
	width: ${widthPercentageToDP('17%')};
	border-radius: 110;
	align-items: center;
	justify-content: center;
`