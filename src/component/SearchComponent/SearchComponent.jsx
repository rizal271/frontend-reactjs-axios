import React from 'react';
import Axios from 'axios';

const SearchComponent = () => {

    return(
        <div className="row justify-content-md-center">                 
            <div className="col-sm-7">
                <input type="text" placeholder="Search Book..." onChange={() => this.search} className="form-control form-control-lg rounded-pill search shadow-sm p-3 mb-5 bg-white" />
            </div>
        </div>
    )
}

export default SearchComponent