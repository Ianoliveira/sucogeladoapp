import styled from 'styled-components/native';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';

export const ProductName = styled.Text`
	color: #fff;
	margin-left: ${widthPercentageToDP('5%')}; 
`
export const ProductPrice = styled.Text`
	color: #fff;
	margin-right: ${widthPercentageToDP('5%')}; 
	font-weight: bold;
`