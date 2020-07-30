import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { doLogout } from '../redux/actions/action'
import {connect} from 'react-redux'

export class NavLink2 extends Component {
    doLogout=()=>{
        this.props.doLogout()
    }
    render() {
        const user = localStorage.getItem("name")
        const link = '/profile/'+localStorage.getItem("userid")
        return (
<ul className="navbar-nav pr-5 mr-5">
    <li className="nav-item">
        <button className="nav-link active btn btn-dark" onClick={this.doLogout}>Logout</button>
    </li>
    <li className="nav-item">
        <Link to={link} className="nav-link active">
            {user}
            <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="img" className='p-0 rounded-circle ml-2' height='30px'/>
        </Link>
    </li>
</ul>
        )
    }
}
const mapStateToProps =state=>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        doLogout:()=>dispatch(doLogout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavLink2)
