import style from "./CountryCard.module.css";


export default function CountryCard ({ flag, name, continents }) {


    return(
        <div className={style.CountryCard}>
            <h2>{name}</h2>
            <h4>{continents}</h4>
            <img src={flag} alt={name}  />
        </div>
    )
};
