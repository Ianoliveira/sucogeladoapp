import styled from 'styled-components';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/responsive';

export const Container = styled.View`
	flex: 1;
	flex-direction: row;
	width: ${widthPercentageToDP('90%')};
	align-self: center;
	justify-content: space-between;
	margin-top: 12;
`