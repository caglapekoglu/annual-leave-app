import { filterLeaves } from "../../../Helper/Helper";
import * as requestFromServer from "./leaveCrud";
import { Slice, callTypes } from "./leaveSlice";
const { actions } = Slice;

export const createLeave = (data) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  return requestFromServer
    .createLeave(data)
    .then((response) => {
      if (response && response.data) {
        dispatch(actions.createLeave(response.data));
        return response.data;
      } else {
        throw new Error("Invalid server response");
      }
    })
    .catch((error) => {
      let err = error.response?.data?.message || error.message || "Unknown error";
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false;
    });
};

export const getLeave = (role) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getLeaves()
      .then((response) => {
        const newArr = filterLeaves(response.data.leaves,role);
        dispatch(actions.gets(newArr));
        return response.data;
      })
      .catch((error) => {
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const getLeaveRej = (role) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getLeaves()
      .then((response) => {
        const newArr = filterLeaves(response.data.leaves,role);
        dispatch(actions.gets(newArr));
        return response.data;
      })
      .catch((error) => {
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const update = (data) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    console.log(data)
    return requestFromServer
      .updateLeave(data)
      .then((response) => {
        return response.data.state;
      })
      .catch((error) => {
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const addLeave = (data) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    if (data) {
      dispatch(actions.add(data))
      return data
    }
  
  }