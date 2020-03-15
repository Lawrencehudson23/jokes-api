import React,{useState} from 'react'
import axios from "axios";
import { navigate } from '@reach/router';

export default function NewJoke() {
    const [formState, setFormState] = useState({
        setup:"",
        punchline:""
    });

    function handleChange(event) {
        const {name, value} = event.target

        setFormState({
            ...formState,
            [name]:value
        }) 
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios
          .post("http://localhost:5000/api/jokes/new",formState)
          .then(res => navigate("/jokes/"+ res.data._id ))
          .catch(err => console.error(err));
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Setup: </label>
                <input 
                type="text" name="setup" value={formState.setup} onChange={handleChange}/>
            </div>         
            <div>
                <label>Punchline: </label>
                <input 
                type="text" name="punchline" value={formState.punchline} onChange={handleChange}/>
            </div>    
            <button>Create</button>     
        </form>
    )
}
