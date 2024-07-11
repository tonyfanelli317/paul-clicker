import React from "react";
import PropTypes from "prop-types";
import Button from "src/atomic/button.js";

const ShopComponent = (props) => {
    return(<div>
        <Button class={props.class} onclick={props.onclick} photoID={props.photoID} imgSRC={props.imgSRC} />
        <h2>{props.itemTitle}</h2>
        <p id="costCounter">Cost: {props.cost} Pauls</p>
        <p id="rateCounter">+{props.rate} Pauls Per Second</p>
        <p id="amountCounter">{props.amount}</p>
    </div>);
};

ShopComponent.PropTypes = {
    class: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    imgSRC: PropTypes.string.isRequired,
    photoID: PropTypes.string,
    itemTitle: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
};

export default ShopComponent;