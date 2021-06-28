//libraries
import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
	return (
		<nav>
			<ul>
				<ListItem>
					<ExactLink href="/" exact>
						<a>
							<div>
								<h4>
									<span>K</span>UCHTA
								</h4>
								<h4>
									<span>B</span>UCHTA
								</h4>
							</div>
						</a>
					</ExactLink>
				</ListItem>
			</ul>
		</nav>
	);
};

const ExactLink = styled(Link)<any>``;

const ListItem = styled.div`
	padding: 2rem 0;

	text-align: center;
	a {
		text-decoration: none;
		font-family: var(--first-font);
		color: var(--second-col);
		font-size: 2.8rem;
	}

	h4 {
		line-height: 1;
		font-weight: 400;
	}

	span {
		color: var(--first-col);
	}
`;

export default Nav;
