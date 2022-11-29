import {useState,useEffect,Fragment,useContext} from 'react'
import Questions from './Questions';
import { globalVariable } from '../../App';
const Login = ({firstname})=>{

    // const {display,setDisplay} = useContext(globalVariable)
    console.log(firstname)
   
    return(
        <Fragment>
            <div className = "login-container">
                <h1>Hello there!!</h1>
                <p>If I have sent this quiz to you personally I expect you to ace it with all manner of alacrity</p>
                <p>If you're here from twitter, then don't worry I won't put too much pressure on you LOL</p>
                <div className ="input-name-container">
                    <div>
                         <input type="text" placeholder="what is your name?"></input>
                    </div>
                    <button>Start Quiz</button>
                    <button>{firstname}</button>

                </div>
            </div>
        </Fragment>
    )
}

export default Login;