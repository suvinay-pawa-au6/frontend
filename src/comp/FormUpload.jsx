import React, { Component } from 'react'
import Axios from 'axios'
import {connect } from 'react-router'


export class FormUpload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             file:null
        }
    }
    handleChange = (event) => {
        this.setState({file:event.target.files[0]});
    };
    componentDidUpdate(){
        console.log('this is update ',this.state.file)
    }
      
    handleSubmit = async (e) => { 
        e.preventDefault();
        const formData = new FormData(); 
        formData.append( 
            "uploadImage", 
            this.state.file, 
            this.state.file.name 
        )
        const {data} = await Axios.post("https://cors-anywhere.herokuapp.com/https://mygallery-v3.herokuapp.com/postImage", formData);
        alert("upload done")
        this.props.getData()
    }; 
    
    render() {
        return (
            <div className='m-auto text-center'>
                <form onSubmit={this.handleSubmit} className='form shadow p-4 col-7 m-auto rounded'>
                    <label className='mr-3'>Public upload</label>
                  <input type="file" onChange={this.handleChange} />
                  <button className='btn btn-primary' type="submit">submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        getData:()=>dispatch(getData())
    }
}
export default connect(null,mapDispatchToProps)(FormUpload)
