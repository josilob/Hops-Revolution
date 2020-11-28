import styled from 'styled-components';
export const Bars = styled.span`
	display: none;
	color: #f4bb6a;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;
