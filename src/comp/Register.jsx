import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getRegister } from '../redux/actions/action'

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"rmanas000@gmail.com",
             password:"123456",
             name:"manas"
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
        this.props.getRegister({email:email.value,name:name.value,password:password.value})
    }

    render() {
        return (
<div className='mt-5'>
    <form className="form p-4 m-auto col-3 shadow rounded" onSubmit={this.handleSubmit}>
        <h2 className='text-center'>Register</h2>
        <input type="email" name='email' id='email' placeholder='email' className='form-control m-1' required value={this.state.email} onChange={this.handleChange}/>
        <input type="text" name='name' id='firstname' placeholder='name' className='form-control m-1' required value={this.state.name} onChange={this.handleChange}/>
        <input type="password" name='password' id='password' placeholder='password' className='form-control m-1' required value={this.state.password} onChange={this.handleChange}/>
        <button className='btn btn-primary form-control m-1'>Register</button>
    </form>
</div>
        )
    }
}

const mapStateToProps = state =>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        getRegister:(paylaod)=>dispatch(getRegister(paylaod))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)
