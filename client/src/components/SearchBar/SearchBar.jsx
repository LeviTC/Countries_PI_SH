import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortSettings } from "../../redux/actions/sortSettings/sortSettings";
import style from "./SearchBar.module.css";
export default function SearchBar (){

    const searchBar = useSelector(state => state.searchBar);
    
    const dispatch = useDispatch();


    let handleChange = (event)=> {
        const {value, name} = event.target;
        dispatch(sortSettings({value, name}))
        
    };
    return(
        <div className={style.textInputWrapper}>
            <input 
            className={style.textInput}
            type="search" 
            name="searchBar" 
            onChange={handleChange} 
            value={searchBar} 
            placeholder="Search by name." />
        </div>
    )
};