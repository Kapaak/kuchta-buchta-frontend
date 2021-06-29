//libraries
import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--first-col);
	color: var(--third-col);
	margin-top: 8rem;

	div {
		padding: 1.4rem;
	}
`;

const Footer = () => {
	const d = new Date();
	const date = d.getFullYear();
	return (
		<StyledFooter>
			<div>Copyright © {date} Pavel Zapletal.</div>
		</StyledFooter>
	);
};

export default Footer;
