import axios from "axios"
// import { _getToken } from "../../../Helper/Helper"


export function getLeaves() {
    var config = {
        method: 'get',
        url: 'http://localhost:8000/api/leave'
    }
    return axios(config)
}

export function getLeave(id) {
    var config = {
        method: 'get',
        url: `http://localhost:8000/api/leave/${id}`
    }
    return axios(config)
}
export function createLeave(data) {
    var config = {
        method: 'post',
        url: `http://localhost:8000/api/leave`,
        data: data
    }
    return axios(config)
}
export function updateLeave(data) {
    var config = {
      method: "put",
      url: 'http://localhost:8000/api/leave/'+data._id,
      
      data: data,
    };
    return axios(config);
  }


export function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    return localStorage.getItem('@authToken')
}

