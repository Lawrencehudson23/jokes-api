import React,{useEffect,useState} from 'react'
import axios from "axios";
import { navigate } from '@reach/router';

export default function UpdateJoke({id}) {
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/jokes/"+id)
            // .then(res=>console.log(res))
            .then(res => setJoke(res.data))
            .catch(err => console.error({message:"cant find this joke by id",error:err}))
        },[])


    function handleChange(event) {
        const {name, value} = event.target

        setJoke({
            ...joke,
            [name]:value
        }) 
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios
          .put("http://localhost:5000/api/jokes/update/"+id,joke)
          .then(res => navigate("/jokes/"+ res.data._id ))
          .catch(err => console.error(err));
    }

    return joke==null ? 'Loading...' : 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Setup: </label>
                <input 
                type="text" name="setup" value={joke.setup} onChange={handleChange}/>
            </div>         
            <div>
                <label>Punchline: </label>
                <input 
                type="text" name="punchline" value={joke.punchline} onChange={handleChange}/>
            </div>    
            <button>Edit</button>     
        </form>;
}
