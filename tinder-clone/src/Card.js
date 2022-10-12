import React, {useState, useEffect} from 'react';
import "./Card.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

document.body.style.transition = "all 0.8s";
function Card() {
    const [people, setPeople]= useState([]);

    useEffect(() => {
      async function fetchData(){
        const req = await axios.get('/tinder/cards')

        setPeople(req.data);
      }

      fetchData();
    }, [])
    

    const swiped = (direction, nameToDelete) =>{
        console.log("Removing: " + nameToDelete);
        console.log(direction);
        if (direction === 'right') {
            flashpink();
            setTimeout(()=>{
                document.body.style.background ="";
            }, 2100);
        }        
        if (direction === 'left') {
            flashgrey();
            setTimeout(()=>{
                document.body.style.background ="";
            }, 2100);
        }
    };

    const outOfFrame = (name) =>{
        console.log(name + " left the page");
        
    };

    return (
    <div className='Card'>
        <div className='Cardcontainer'>
            {people.map((elem) =>(
                <TinderCard
                    className="swipe"
                    key={elem.name}
                    preventSwipe = { [ "up", "down"]}
                    onSwipe={(dir) => swiped(dir, elem.name)}
                    onCardLeftScreen={()=>outOfFrame(elem.name)}
                >
                    <div className='image' style={{backgroundImage:`url(${elem.url})`}}> {/* used inline styling and used a variable instead of using or typing the whole url */}
                        <h3>{elem.name}</h3>
                    </div> 

                </TinderCard>
                ))}
        </div>
    </div>
  )
}

function flashpink() {
    document.body.style.background="linear-gradient(to right,#fa215e,#f848a9)";
};
function flashgrey() {
    document.body.style.backgroundColor ="gray";
};


export default Card