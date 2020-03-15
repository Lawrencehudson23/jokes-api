import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link,navigate} from '@reach/router';

export default function JokeList() {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/jokes")
          .then(res => setJokes(res.data))
          .catch(err => console.error(err));
    }, [])

    function handleDelete(id) {
        axios
          .delete("http://localhost:5000/api/jokes/"+id)
          .then(res => {
            const newJokes=jokes.filter(joke=>joke._id!==id);
            
            setJokes(newJokes)
          })
          .catch(err => console.error(err));
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jokes.map((joke)=> (
                        <tr key={joke._id}>
                            <td>
                                <Link to={'/jokes/'+joke._id}>
                                    {joke.setup}
                                </Link>
                            </td>
                            <td>
                                
                                <button onClick={()=>navigate('/jokes/'+joke._id)}>View</button>{' '}
                                <button onClick={()=>navigate('/jokes/'+joke._id+'/edit')}>Edit</button>{' '}
                                <button onClick={() => handleDelete(joke._id)}>Delete</button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    )
}  


