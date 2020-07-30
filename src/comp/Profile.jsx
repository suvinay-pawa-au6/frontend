import React, { Component } from 'react'
import Loading from './Loading'
import Axios from 'axios'
import { connect } from 'react-redux'
import { getPrivate } from '../redux/actions/action'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            file:null
        }
    }
    handleChange = (event) => {
        console.log(event.target.files[0])
        this.setState({file:event.target.files[0]});
    };
    componentDidMount(){
        this.props.getPrivate(localStorage.getItem("userid"))
    }
      
    handleSubmit = async (e) => { 
        try{
            e.preventDefault();
        const formData = new FormData()
        formData.append(
            'uploadImage',
            this.state.file
        )
        const userid = localStorage.getItem("userid")
        const {data} = await Axios.post(`https://cors-anywhere.herokuapp.com/https://mygallery-v3.herokuapp.com/addProfile/${userid}`, formData);
        console.log(formData)
        alert("upload done")
        this.props.getPrivate(localStorage.getItem("userid"))
        }catch(err){
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <div className="card shadow  text-dark col-8 m-auto">
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit} className='form form-inline'>
                        <label className='mr-3'>Private upload</label>
                  <input type="file" onChange={this.handleChange} required />
                  <button className='btn btn-primary' type="submit">submit</button>
                </form>
                    </div>
                </div>

                {/* card */}
                <div className='row col-12 justify-content-left container m-auto p-5'>
            {this.props.privateImage.length!==0?this.props.privateImage.map(d=>
                <div className='col-3 p-4' key={Math.random()}>
                <img src={d.uploadImage} alt="" className='col-12'/>
            </div>)
        
                :<h1 className='text-center'>Nothing here</h1>}
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps =state=>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        getPrivate:(payload)=>dispatch(getPrivate(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
