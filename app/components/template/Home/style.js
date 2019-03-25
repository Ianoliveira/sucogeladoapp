import styled from 'styled-components';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/responsive';

export const Container = styled.ScrollView`
	flex: 1;
	width: ${widthPercentageToDP('90%')};
	align-self: center;
`