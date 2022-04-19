import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) =>({
    type : types.GET_USERS,
    payload : users,

});
const userDeleted = ()=>({
  type:types.DELETE_USERS
})
const userAdded = ()=>({
    type:types.ADD_USER
})
const getUser = (user)=>({
    type:types.GET_SINGLE_USER,
    payload:user,
})
const userUpdated = ()=>({
    type:types.UPDATE_USER
})


export const loadUsers = () => {
    return function(dispatch){
       axios
       .get(`http://localhost:3004/read`).then((resp)=>{
           console.log("resp",resp)
           dispatch(getUsers(resp.data));
       })
       .catch((error)=>console.log(error));
    }
}
export const loadAdmins = () => {
    return function(dispatch){
       axios
       .get(`http://localhost:3004/getAdmins`).then((resp)=>{
           console.log("resp",resp)
           dispatch(getUsers(resp.data));
       })
       .catch((error)=>console.log(error));
    }
}
export const loadCoordinators = () => {
    return function(dispatch){
       axios
       .get(`http://localhost:3004/getCoordinators`).then((resp)=>{
           console.log("resp",resp)
           dispatch(getUsers(resp.data));
       })
       .catch((error)=>console.log(error));
    }
}
export const loadCustomers = () => {
    return function(dispatch){
       axios
       .get(`http://localhost:3004/getCustomers`).then((resp)=>{
           console.log("resp",resp)
           dispatch(getUsers(resp.data));
       })
       .catch((error)=>console.log(error));
    }
}
export const loadDeliveryBoys = () => {
    return function(dispatch){
       axios
       .get(`http://localhost:3004/getDeliveryBoys`).then((resp)=>{
           console.log("resp",resp)
           dispatch(getUsers(resp.data));
       })
       .catch((error)=>console.log(error));
    }
}

export const deleteUsers = (_id) => {
    return function(dispatch){
       axios
       .delete(`http://localhost:3004/delete/${_id}`).then((resp)=>{
           console.log("resp",resp)
           dispatch(userDeleted());
           dispatch(loadUsers());
       })
       .catch((error)=>console.log(error));
    }
}

export const addUser = (user) => {
    return function(dispatch){
       axios
       .post(`http://localhost:3004/insert`,user).then((resp)=>{
           console.log("resp",resp)
           dispatch(userAdded());
           dispatch(loadUsers());
       })
       .catch((error)=>console.log(error));
    }
}

export const getSingleUser = (_id) => {
    return function(dispatch){
       axios
       .get(`http://localhost:3004/getUser/${_id}`).then((resp)=>{
           console.log("resp",resp)
           dispatch(getUser(resp.data));
           
       })
       .catch((error)=>console.log(error));
    }
}

export const updateUser = (user,id) => {
    return function(dispatch){
       axios
       .put(`http://localhost:3004/update/${id}`, user).then((resp)=>{
           console.log("resp",resp)
           dispatch(userUpdated());
           
       })
       .catch((error)=>console.log(error));
    }
}