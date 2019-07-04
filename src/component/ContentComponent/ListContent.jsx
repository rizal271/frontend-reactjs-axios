import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const ListContent = (props) => {
    return(
        <div className="col-md-3" >                   
            <div className="card mr-3"  style={{width: '13rem'}}> 
            <Link to={'/Detailpage/'+props.idb}>               
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            </Link>
                <div className="card-body">
                    <p className="card-text"><b>{props.title}</b></p>
                    <p>{props.desc}</p>
                    {/* <button onClick={()=> this.delete(item.bookid)}>coba delete</button> */}
                </div>
            </div> 
                                                           
        </div>
    )
}


export default ListContent