//libraries
import React, { useState } from "react";
import styled from "styled-components";
//components
import FilterOption from "./FilterOption";
//interfaces
import { OptionsInterface } from "../utils/Interface";

const FilterOptions = ({ options }: OptionsInterface) => {
	const [active, setActive] = useState(false);
	return (
		<div>
			<StyledButton onClick={() => setActive(!active)}>
				<span>Filtr</span>
				<StyledImage active={active} src="./filter.svg" alt="filter-img" />
			</StyledButton>

			<StyledFilterWrapper active={active}>
				{options.map((o, i) => (
					<FilterOption key={i} option={o} index={i} />
				))}
			</StyledFilterWrapper>
		</div>
	);
};

const StyledFilterWrapper = styled.div<{ active: boolean }>`
	display: flex;
	margin: 1rem 0rem;

	div:not(div:last-child) {
		margin-right: 1rem;
	}

	visibility: ${({ active }) => (active ? "visible" : "hidden")};
	height: ${({ active }) => (active ? "auto" : "0rem")};
	overflow: hidden;
	transition: all 0.5s ease-in-out;
`;

const StyledImage = styled.img<{ active: boolean }>`
	transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
	transition: all 0.5s ease;
`;

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	padding: 1rem 0.5rem;
	background-color: transparent;
	cursor: pointer;

	img {
		width: 1.2rem;
		margin-left: 0.5rem;
	}

	span {
		font-weight: bold;
		font-size: 1.6rem;
	}
`;

export default FilterOptions;
