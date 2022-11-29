import {useState,useEffect,Fragment,useContext} from 'react'
import { globalVariable } from '../../App'
// Question Bank
const questions = [
    {
        query: "What is my Baptismal name",
        optionA:"Rita",
        optionB:"Queen",
        optionC:"Queendoline",
        optionD:"Queeneth",
        answer:"Queendoline"
    },
    {
        query:"What is my current Age as at 2022",
        optionA:"23 years old",
        optionB:"21 years old",
        optionC:"20 years old",
        optionD:"22 years old",
        answer:"22 years old"
    },
    {
        query:"What was my Jamb score in 2018",
        optionA:283,
        optionB:250,
        optionC:273,
        optionD:293,
        answer:283,
    },
    {
        query:"What would I eat on a very broke day",
        optionA:"rice and stew",
        optionB:"beans and plantain",
        optionC:"indomie",
        optionD:"fried plantain and eggsauce",
        answer:"beans and plantain"
    },
    {
        query:"What leadership post did I hold in secondary school",
        optionA:"labour prefect",
        optionB:"Social prefect",
        optionC:"Social prefect",
        optionD:"Assistant Senior Prefect",
        answer:"labour prefect"
    },
    {
        query:"What year did I graduate from secondary school",
        optionA:2015,
        optionB:2017,
        optionC:2014,
        optionD:2016,
        answer:2016
    },
    {
        query:"Which hostel did I live in when I was in 200level",
        optionA:"Akpabio hostel",
        optionB:"Balewa Hostel",
        optionC:"Aja Nwachukwu Hostel",
        optionD:"Nkrumah Hostel",
        answer:"Akpabio hostel"
    },
    {
        query:"What dance crew was I part of in my 100/200 level",
        optionA:"Steppers DC",
        optionB:"The Mop",
        optionC:"Irobot DC",
        optionD:"XMD",
        answer:"Irobot DC"
    },
    {
        query:"Which Big Brother Naija housemate was I Obessesed about",
        optionA:"Maria",
        optionB:"Beauty",
        optionC:"Erica",
        optionD:"Dilish",
        answer:"Erica"
    },
    {
        query:"What reality show have I been watching for the past month",
        optionA:"Love is Blind",
        optionB:"Love Island",
        optionC:"Ultimatun",
        optionD:"Too Hot to handle",
        answer:"Love is Blind"
    }
]

const Questions = ()=>{
    const [counter, setCounter] = useState(0)

    return(
        <Fragment>
            <div className="question-container">
                <h1>hello</h1>
            </div>
        </Fragment>
    )
}

export default Questions;