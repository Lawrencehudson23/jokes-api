import React,{ useEffect, useState } from 'react'
import axios from "axios";

export default function Joke({id}) {
    const [joke, setJoke] = useState(null)

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/jokes/"+id)
        //   .then(res=>console.log(res))
          .then(res => setJoke(res.data))
          .catch(err => console.error(err));
    }, [id])

    return joke === null ? "Loading..." : 
    <>
        <h1>Here is the joke</h1>
        <h2>Setup: {joke.setup}</h2>
        <h2>Punchline: {joke.punchline}</h2>
    </>
}
