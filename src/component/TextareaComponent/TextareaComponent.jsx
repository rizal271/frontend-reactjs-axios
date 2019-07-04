import React from 'react';

const TextareaComponent = (props) => {
    return(
        <div className="form-group">
            <label className="control-label" htmlFor={props.forlabel}>{props.labelname}</label>
            <textarea name={props.inputname} onChange={props.ubah} className="form-control" id={props.idinput} required ></textarea>
        </div>
    )
}


export default TextareaComponent