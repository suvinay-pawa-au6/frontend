import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLogin } from '../redux/actions/action'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"rmanas000@gmail.com",
            password:"123456",
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const {name,email,password} = e.target
        this.props.getLogin({name:name.value,email:email.value,password:password.value})
    }
    render() {
        return (
<div className='mt-5'>
    <form className="form p-4 m-auto col-3 shadow rounded" onSubmit={this.handleSubmit}>
        <h2 className='text-center'>Login</h2>
        <input type="email" name='email' placeholder='email' className='form-control m-1' required id='email' onChange={this.handleChange} value={this.state.email}/>
        <input type="password" name='password' placeholder='password' className='form-control m-1' required id='password' onChange={this.handleChange} value={this.state.password}/>
        <button className='btn btn-primary form-control m-1'>Login</button>
    </form>
</div>
        )
    }
}
const mapStateToProps = state =>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        getLogin:(payload)=>dispatch(getLogin(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
