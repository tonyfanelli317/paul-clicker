import React from "react";
import PropTypes from "prop-types"

const Button = (props) => {
    return(<div>
        <button class={props.class} onclick={props.onclick}>
            <img id={props.photoID} src={props.imgSRC}/>
        </button>
    </div>);
};

Button.PropTypes = {
    class: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    imgSRC: PropTypes.string.isRequired,
    photoID: PropTypes.string
}

export default Button;