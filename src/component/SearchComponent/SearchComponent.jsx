// import React from 'react';
import React, { Component, Fragment } from 'react';
import Axios from 'axios';

const SearchComponent = (props) => {

        return(
            <div className="row justify-content-md-center  () => this.search">                 
                <div className="col-sm-7">
                    <input type="text" placeholder="Search Book..." onChange={props.diketik} className="form-control form-control-lg rounded-pill search shadow-sm p-3 mb-5 bg-white" />
                </div>
            </div>
        )
}

export default SearchComponent