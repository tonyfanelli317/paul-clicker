import React from "react";
import ShopComponent from "../shopcomponent";
import photo from "/Users/joefanelli/Documents/Paul Clicker/paul-clicker/paul-clicker/src/images/PaulGlasses1.jpg"


let glassesCost = 10;
let glassesRate = 1;
let glassesAmount = 0;

const handleClick = console.log("You clicked it!!!");

let PaulGlasses = (props) => {
    return(<div>
        <ShopComponent 
        onClick={handleClick}
        imgSRC={photo}
        itemTitle="Paul's Glasses"
        cost={glassesCost}
        rate={glassesRate}
        amount={glassesAmount}
        />
    </div>);
};


export default PaulGlasses;