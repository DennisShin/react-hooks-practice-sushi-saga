import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


let startCount = 4;

function SushiContainer(props) {
  
  // let sushiToDisplay = props.sushiList.slice(startCount , endCount)
  const [sushiToDisplay, setSushiToDisplay] = useState([
    {
      "id": 1,
      "name": "Maguro Magic",
      "img_url": "./sushi/maguro.png",
      "price": 20,
      "created_at": "2018-07-27T18:53:16.241Z"
    },
    {
      "id": 2,
      "name": "Tsundere Ebi",
      "img_url": "./sushi/ebi.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.244Z"
    },
    {
      "id": 3,
      "name": "Oh Sake",
      "img_url": "./sushi/sake.png",
      "price": 10,
      "created_at": "2018-07-27T18:53:16.248Z"
    },
    {
      "id": 4,
      "name": "Kawaii Tobiko",
      "img_url": "./sushi/tobiko.png",
      "price": 25,
      "created_at": "2018-07-27T18:53:16.251Z"
    }
  ])
  // console.log(sushiToDisplay)
  
  function showMore(){
    setSushiToDisplay(props.sushiList.slice(startCount, startCount + 4))
    if(startCount >= 96){
      startCount = 0
    }else{
      startCount = startCount + 4
    }
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiToDisplay.map((sushi) => {
        return(
          <Sushi key={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price} eatSushi={props.eatSushi} money={props.money}/>
        )
      })}
      <MoreButton showMore={showMore}/>
    </div>
  );
}

export default SushiContainer;
