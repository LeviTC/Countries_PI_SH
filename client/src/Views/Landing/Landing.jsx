import style from "./Landing.module.css"
import LogIn from "../../components/LogIn/LogIn";


export default function Landing () {
    
    return(
        <div className={style.divsote}>
        <div className={style.landingContainer} >
            <h1>Hi, welcome to my individual project.</h1>
            <h2>Where do you want to</h2>
            <LogIn/>
        </div>
        </div>
    )
}