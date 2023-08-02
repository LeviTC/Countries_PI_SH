import { useSelector } from "react-redux";
import style from "./CountryDetail.module.css";

export default function CountryDetail () {
    const {id, name, flag, continents, capital, subregion, area, population, Activities } = useSelector(state => state.countryDetail);
    return (
        <div className={style.container} >
        <div className={style.detailContainer} >
            <div className={style.countryInfo} >
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>Continets: {continents}</p>
                <p>Capital: {capital}</p>
                <p>Subregion: {subregion}</p>
                <p>Area: {area} km²</p>
                <p>Population: {population}</p>
                <p>Activities: </p>
                <ol>
                    {Activities && Activities.map(activity => (
                        <li key={activity.id}>
                            <h4>{activity.name}</h4>
                            <h5>Difficulty: {activity.difficulty}</h5>
                            <h5>Duration: {activity.duration} hour(s)</h5>
                            <h5>Season: {activity.season}</h5>
                        </li>
                    ))}
                </ol>
            </div>

            <div className={style.flag}>
                <img className={style.flagImage}src={flag} alt={name} />
            </div>
        </div>
        </div>
    )
};
