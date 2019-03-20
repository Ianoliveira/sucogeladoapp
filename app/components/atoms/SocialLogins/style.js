import styled from 'styled-components/native';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-around;
	width: ${widthPercentageToDP('90%')};
	margin-top: ${heightPercentageToDP('5%')};
`