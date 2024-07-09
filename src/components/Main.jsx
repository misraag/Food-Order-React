import { useState } from "react"
import { useEffect } from "react"

export default function Main () {
    const [availableCuisine, setAvailableCuisine] = useState();
    
    useEffect(()=>{
        async function getData() {
            const availableMeals = await fetch('http://localhost:3000/meals')
            const data = await availableMeals.json()
            console.log(data)
            setAvailableCuisine(data);
        }
        
        getData();
    }, [])
    
    return <div id="meals">
        {availableCuisine && availableCuisine.map((cuisine) => {
            let baseURL= "http://localhost:3000/" 
            let imgURL = baseURL + cuisine.image
            return <li id={cuisine.id} className="meal-item">
                
                <img src={imgURL}></img>
                
                <h3>{cuisine.name}</h3>
                
                <p className="meal-item-price">{cuisine.price}</p>
                
                
                <p className="meal-item-description">{cuisine.description}</p>
                
                
                <button className="button">Add to Cart</button>
                
            </li>
        })}
    </div>
}