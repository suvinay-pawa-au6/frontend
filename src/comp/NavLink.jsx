import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavLink extends Component {
    render() {
        return (
            <ul className="navbar-nav pr-5 mr-5">
            <li className="nav-item">
                <Link to="/login" className="nav-link active" onClick={this.props.getData}>Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link active" onClick={this.props.getData}>Register</Link>
            </li>
        </ul>
        )
    }
}

export default NavLink
