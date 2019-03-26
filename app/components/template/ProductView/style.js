import styled from 'styled-components';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';
import normalize from '../../../utils/normalizeFont';

export const Card = styled.View`
	align-items: center;
`

export const Image = styled.Image`
	width: ${widthPercentageToDP('35%')};
`

export const Text = styled.Text`
	color: #fff;
	font-size: ${normalize(17)};
`

export const TextSubTitle = styled.Text`
	color: #fff;
	margin-top: 5;
	font-size: ${normalize(15)};
`

export const Borda = styled.View`
	border-color: #fff;
	border-width: ${widthPercentageToDP('.05%')};
	opacity: .29;
	width: ${widthPercentageToDP('55%')};
	margin-top: 10;
	margin-bottom: 10;
`

export const ContainerPrice = styled.View`
	margin-top: ${heightPercentageToDP('3%')};
	flex-direction: row;
	justify-content: space-between;
	width: ${widthPercentageToDP('50%')};
`
export const TextPrice = styled.Text`
	font-size: ${normalize(15)};
	color: #fff;
	font-weight: bold;
`

export const RateContainer = styled.View`
	flex-direction: row;
	width: ${widthPercentageToDP('40%')};
	justify-content: space-around;
	margin-bottom: ${heightPercentageToDP('1%')};
`
export const RateStar = styled.Image`
	width: ${widthPercentageToDP('6%')};
`

export const RateText = styled.Text`
	font-size: ${normalize(10)};
	color: #959595;
`