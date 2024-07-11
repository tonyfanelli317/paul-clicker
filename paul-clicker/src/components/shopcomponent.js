import React from "react";
import PropTypes from "prop-types";
import Button from "/Users/joefanelli/Documents/Paul Clicker/paul-clicker/paul-clicker/src/atomic/button.js";



let ShopComponent = (props) => {
    return(<div>
        <Button class={props.class} onClick={props.onClick} photoID={props.photoID} imgSRC={props.imgSRC} />
        <h2>{props.itemTitle}</h2>
        <p id="costCounter">Cost: {props.cost} Pauls</p>
        <p id="rateCounter">+{props.rate} Pauls Per Second</p>
        <p id="amountCounter">{props.amount}</p>
    </div>);
};

ShopComponent.propTypes = {
    class: PropTypes.string,
    //onClick: PropTypes.func.isRequired,
    imgSRC: PropTypes.string.isRequired,
    photoID: PropTypes.string,
    itemTitle: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
};

export default ShopComponent;