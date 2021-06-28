//components
import FilterOptions from "./FilterOptions";
//interfaces
import { OptionsInterface } from "../utils/Interface";

const Filter = ({ options }: OptionsInterface) => {
	return <FilterOptions options={options} />;
};

export default Filter;
