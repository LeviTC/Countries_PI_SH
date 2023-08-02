import { useDispatch, useSelector } from "react-redux"
import { sortSettings } from "../../redux/actions/sortSettings/sortSettings";
import style from "./FilterButtons.module.css";

export default function FilterButtons(){
    const activity = useSelector(state => state.activity);
    const continents = useSelector(state => state.continents);

    const dispatch = useDispatch();
    

    const handlerChange = (event) => {
        const {value, name} = event.target;
        dispatch(sortSettings({value, name }))
    }
    return(
        <div className={style.filterContainer} >
            <label htmlFor="continents">Filter by: </label>
            <select className={style.filterSelect} name="continents" value={continents} onChange={handlerChange}>
                <option value="AllContinents">All Continents</option>
                <option value="North America"> North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Antarctica">Antarctica</option>
            </select>
    
            <select className={style.filterSelect} name="activity" value={activity} onChange={handlerChange}>
                <option value="Activity" disabled>Activity Season</option>
                <option value="All">All</option>
                <option value="With activities">With activities</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
            </select>
        </div>
    )
};