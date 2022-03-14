import React, {useState, useEffect} from "react";
import axios from "axios";
import "./DadJoke.css";

export default function DadJoke(){
    const[joke,setJoke]=useState("");
    const [wantNewJoke, setWantNewJoke]=useState(0);
    useEffect(()=>{
        async function getJoke(){
            let res=await axios.get ('https://icanhazdadjoke.com/',{headers:{"Accept":"application/json"} });
            //console.log(res);
            setJoke(res.data.joke);
        }
        getJoke();
    },[wantNewJoke]
    );

    return(
        <div className="Joke">
            <h1>Random Dad Joke</h1>
            
            <div className="JokeText">
                <p>{joke}</p>
            </div>
            

            <button onClick={()=>{setWantNewJoke(wantNewJoke+1);}}>
                Get New Joke
            </button>
            
            <footer className="footer">
                <p>Credits: https://icanhazdadjoke.com/ </p>
            </footer>
            
        </div>
    )
}