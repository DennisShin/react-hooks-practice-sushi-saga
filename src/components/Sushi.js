import React, { useState } from "react";

function Sushi(props) {
  const [isEaten, setIsEaten] = useState(false);
  function nomNomNom(){
  if(props.money - props.price >= 0){
    setIsEaten(true);
  }
}

  return (
    <div className="sushi">
      <div className="plate" onClick={props.eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            onClick={nomNomNom}
            src={props.img}
            alt={props.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
}

export default Sushi;
