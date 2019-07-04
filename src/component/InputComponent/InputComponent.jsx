import React from 'react';

const InputComponent = (props) => {
    return(
        <div className="form-group">
            <label className="control-label" htmlFor={props.forlabel}>{props.labelname}</label>
            <input type="text" name={props.inputname} onChange={props.ubah} className="form-control" id={props.idinput} required />
        </div>
    )
}


export default InputComponent