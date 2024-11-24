import React from "react";

const Navbar = () => {
    return (
        <>
        <br></br>
        <br></br>
        <div className="container mt-4 pt-4">
            <h1 className="text-center text-light display-1">Movie <span className="text-warning">Box</span></h1>
            <ul className="nav p-4 justify-content-center">
                <li className="nav-item">
                <a className="nav-link text-warning" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Chinese Drama</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">TV Series</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">K-drama</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Genre</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">How to download</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar