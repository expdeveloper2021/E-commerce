import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import logo from '../Images/logo.jpg'
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                        Bazaar
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <input className="form-control mr-sm-2 input-search" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success btn-search">Search</button>
                        <ul className="navbar-nav ml-auto">
                            <button className="btn btn-outline-dark my-2 my-sm-0" style={{ margin: 1, padding: 10 }}>Sell</button>
                            <button className="btn btn-outline-dark my-2 my-sm-0" style={{ margin: 1, padding: 10 }}>Favourites</button>
                            <button className="btn btn-outline-dark my-2 my-sm-0" style={{ margin: 1, padding: 10 }}>Logout</button>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)