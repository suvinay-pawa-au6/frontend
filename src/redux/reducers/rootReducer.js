import {GET_LOGIN, GET_REGISTER, LOGIN_TRUE, GET_DATA, DO_LOGOUT, GET_PRIVATE} from '../actions/action'

const initState = {
    data:[],
    detail:[],
    login:false,
    username:'',
    privateImage:[]
}

export function rootReducer(state = initState,action){
    const {type,payload} = action
    switch(type){
        case GET_LOGIN:return {...state,username:payload.user.firstName,login:true}
        case GET_REGISTER:return state   
        case LOGIN_TRUE:return {...state,login:true,username:localStorage.getItem("user")} 
        case GET_DATA:return {...state,data:payload} 
        case DO_LOGOUT:return {...state,username:"",login:false}  
        case GET_PRIVATE:return {...state,privateImage:payload}
        default:return state
    }
}