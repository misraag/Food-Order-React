import { useState } from "react";
import { useEffect } from "react";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect( ()=> {
        async function fetchMeals() {
            const response  = await fetch('http://localhost:3000/meals');
    
            if(!response) {
                //....
            }
    
            const resData = await response.json();
            setLoadedMeals(resData);
        }
        fetchMeals();
        
    }, []);
    
    

    return (<ul id="meals">
    {loadedMeals.map( (meal) => (
        <li key={meal.id}> {meal.name} </li>
    ))}
    </ul>
    );
}