import Axios from 'axios'
export const GET_REGISTER = 'GET_REGISTER'
export const GET_LOGIN = 'GET_LOGIN'
export const LOGIN_TRUE = "LOGIN_TRUE"
export const DO_LOGOUT = 'DO_LOGOUT'
export const GET_DATA = 'GET_DATA'
export const UPLOAD_PRIVATE = 'UPLOAD_PRIVATE'
export const GET_PRIVATE = 'GET_PRIVATE'

const base = "https://cors-anywhere.herokuapp.com/https://mygallery-v3.herokuapp.com"
export const getData = ()=>async dispatch=>{
    try{
        const {data} = await Axios.get(`${base}/getMyImages`)
        return dispatch({
            type:GET_DATA,
            payload:data.PublicImages
        })
    }catch(err){
        console.log(err)
    }
}
export const getLogin = ({email,password})=>async dispatch=>{
    try{
        const {data} = await Axios.post(`${base}/signIn`,{email,password})
        // localStorage.setItem('token',data.user.token)
        localStorage.setItem('name',data.user.name)
        localStorage.setItem('userid',data.user._id)
        return dispatch({type:GET_LOGIN,payload:data})
    }catch(err){
        console.log(err)
        alert("login failed")
    }
}

export const getRegister = ({name,email,password})=>async dispatch =>{
    try{
        const {data} = await Axios.post(`${base}/signUp`,{email,name,password})
        alert("register successfull")
        return dispatch({type:GET_REGISTER,payload:data})
    }catch(err){
        alert("registration failed")
    }
}

export const checkLogin = ()=>dispatch=>{
    const token = localStorage.getItem("name")
    if(token){
        return dispatch({type:LOGIN_TRUE})
    }
}
export const doLogout = ()=>dispatch=>{
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("userid")
    alert("logut done")
    return dispatch({
        type:DO_LOGOUT
    })
}

export const getPrivate = (payload)=>async dispatch=>{
    const {data}=await Axios.get(`${base}/getMyImagesPrivate/${payload}`);
    return dispatch({
        type: GET_PRIVATE,
        payload:data.MyImages
    })
}