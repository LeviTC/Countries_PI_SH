import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import FilterButtons from "./FilterButtons";
import SortedOptions from "./SortedOptions";
import { resetSettings } from "../../redux/actions/resetSettings";
import style from "./CardsOptions.module.css"

export default function CardsOptions () {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    const handlerClick = () => {
        dispatch(resetSettings(countries));
    };

    return(
        <div className={style.optionsContainer} >
            <SearchBar/>
            <SortedOptions/>
            <FilterButtons/>
            <button className={style.reset} onClick={handlerClick}>Reset filters</button>
        </div>
    )
};