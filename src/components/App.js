import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
  const [sushiList, setSushiList] = useState([]);
  const [money, setMoney] = useState(100);
  const [plates, setPlates] = useState([])

  function addPlate(){
    setPlates(plates.concat("Plate"))
    console.log(plates)
  }
  

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setSushiList(data))
  }, [])

  function eatSushi(event){
    // let dollarSign = event.target.parentNode.parentNode.querySelector("h4").textContent.indexOf("$");
    let sellingPrice = event.target.parentNode.parentNode.querySelector("h4").textContent.split("$")[1];
    if(money - sellingPrice >= 0){
      setMoney(prevMoney => prevMoney - sellingPrice)
      addPlate()
    }else{
      alert("You are broke.")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} eatSushi={eatSushi} money={money}/>
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
