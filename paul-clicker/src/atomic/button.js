import React from "react";
import PropTypes from "prop-types"

const handleClick = console.log("You clicked it!!!");

const Button = (props) => {
    return(<div>
        <button className={props.class} onClick={handleClick}>
            <img id={props.photoID} alt={props.altText} src={props.imgSRC}/>
        </button>
    </div>);
};

Button.propTypes = {
    class: PropTypes.string,
    //onClick: PropTypes.func.isRequired,
    imgSRC: PropTypes.string.isRequired,
    photoID: PropTypes.string,
    altText: PropTypes.string
}

export default Button;