import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import axios from './axios';
import './Tinder.css'

const TinderCards = () => {
    const[people,setpeople]=useState([]);
    useEffect(() => {
       async function fetchdata(){
           const request=await axios.get("/tinder/card");
           setpeople(request.data);
       }
       fetchdata();
    }, [])
const swiped=(direction,nametodel)=>{
console.log("removing"+nametodel);

//setLastDirection(direction);
}
const outOfFrame=(name)=>{
    console.log(name+"left the screen");
   
    }
    return (
        <div className="tinderCards">
        <div className="tinderCards_Container">
        {
                people.map((person)=>(
                  <TinderCard className="swipe"
                  key={person.name}
                  preventSwipe={["up","down"]}
                    onSwipe={(dir)=>{swiped(dir,person.name)}}
                     onCardLeftScreen={()=>outOfFrame(person.name)}
                  >
                    <div style={{backgroundImage:`url(${person.imageUrl})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>


                  </TinderCard>
                ))
            }
        </div>
           
        </div>
    )
}

export default TinderCards
