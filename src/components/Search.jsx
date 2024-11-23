import React from "react";
import './index.css';

const Search = () => {
    return (
        <>
        <div className="container form mt-4">
            <div className="input-group">
                <div className="input-group">
                <input type="search" placeholder="Search" className="form-control p-4" />
                </div>
                <div className="input-group-append">
                    <button className="btn btn-info p-4 m-1 fa fa-search"></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Search