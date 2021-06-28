//libraries
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
//context
import { FilterContext } from "@/components/utils";
//breakpoints
import breakpoints from "@/styles/breakpoints";

interface Props {
	option: string;
	index: number;
}

const FilterOption = ({ option, index }: Props) => {
	const [active, setActive] = useState(false);
	const labelRef = useRef<HTMLLabelElement>(null);

	const [optionsHandler] = useContext(FilterContext);

	const activeHandler = () => {
		optionsHandler(labelRef?.current?.textContent);
		setActive(!active);
	};
	return (
		<StyledWrapper active={active}>
			{/* <input
				onClick={() => activeHandler()}
				type="checkbox"
				name={`option${index}`}
				id={`option${index}`}
			/> */}
			<label
				ref={labelRef}
				htmlFor={`option${index}`}
				onClick={() => activeHandler()}
			>
				{option}
			</label>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div<{ active: boolean }>`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	background-color: ${({ active }) =>
		active ? "var(--second-col)" : "rgba(240, 186, 88,0.2)"};
	border-radius: 0.6rem;
	margin: 0.1rem;
	user-select: none;
	box-shadow: 0 0px 1px rgba(240, 187, 88, 0.13),
		0 0px 2px rgba(240, 187, 88, 0.13), 0 0px 4px rgba(240, 187, 88, 0.13),
		0 0px 8px rgba(240, 187, 88, 0.13), 0 0px 16px rgba(240, 187, 88, 0.13);
	cursor: pointer;

	&:hover {
		background-color: ${({ active }) =>
			active ? "rgba(240, 186, 88,0.8)" : "rgba(240, 186, 88,0.4)"};
		transition: background-color 0.3s ease;
	}

	label {
		cursor: pointer;
		padding: 0.6rem 0.4rem;
	}

	input {
		margin-right: 0.1rem;
		display: none;
	}

	@media ${breakpoints.desktop} {
		font-size: 1.8rem;
		label {
			padding: 1rem 0.8rem;
		}
	}
`;

export default FilterOption;
