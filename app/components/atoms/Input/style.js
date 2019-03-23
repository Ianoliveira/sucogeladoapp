import styled from 'styled-components';
import normalize from '../../../utils/normalizeFont';
import { widthPercentageToDP, heightPercentageToDP } from '../../../utils/responsive';

export const TextInput = styled.TextInput`
	font-size: ${normalize(16)};
	margin: 0;
	padding: 0;
	margin-bottom: ${heightPercentageToDP('1%')};
	font-weight: 200;
`

export const View = styled.View`
	border-bottom-color: #939393;
	border-bottom-width: .3;
	margin-bottom: 10;
	width: ${widthPercentageToDP('90%')};
	margin-bottom: ${heightPercentageToDP('5%')};
`