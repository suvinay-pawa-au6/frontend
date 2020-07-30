import React, { Component } from 'react'
import {connect} from 'react-redux'
import { checkLogin } from '../redux/actions/action'
import {DebounceInput} from 'react-debounce-input';
import {Link,Redirect} from 'react-router-dom'
import NavLink2 from './NavLink2';
import NavLink from './NavLink'

export class Nav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:''
        }
    }
    
    handleSearch = (e)=>{
        e.preventDefault()
        const {search} = e.target
        this.props.getSearch(search.value)
    }
    handleInput = event =>{
        this.props.getSearch(event.target.value)
        this.setState({value: event.target.value})
    }
    componentDidMount(){
        this.props.checkLogin()
    }

    render() {
        return (
<nav className='navbar navbar-light bg-light navbar-expand-sm justify-content-between'>
    
{this.props.login===true?<Redirect to='/'/>:null}
    <div className='pl-4 row'>
    <Link className='navbar-brand pl-5' to="/">My gallery</Link>
    <form className="form form-inline bg-light rounded" onSubmit={this.handleSearch} style={{overflow:"hidden"}}>
    <DebounceInput
        className='form-control border-0'
        placeholder="search"
        minLength={1}
        debounceTimeout={1500}
        onChange={this.handleInput}
        value={this.state.value} />
    </form>
    </div>
    {this.props.login===true?<NavLink2/>:<NavLink/>}
</nav>
        )
    }
}
const mapStateToProps = state =>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        checkLogin:()=>dispatch(checkLogin())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)
