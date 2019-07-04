import React from 'react';
import { Button } from 'reactstrap';

const ButtonComponent = (props) => {
    return(
        <Button onClick={props.clik} className={props.class} >
            {props.value}
        </Button>
    )
}

ButtonComponent.defaultProps ={
    class: "",
    value: "Button Default"
}

export default ButtonComponent