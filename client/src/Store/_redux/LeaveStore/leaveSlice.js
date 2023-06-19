import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaves: []
};

export const callTypes = {
  list: "list",
  action: "action",
};

//State işlemleri için
export const Slice = createSlice({
  name: "leave",
  initialState: initialState,
  reducers: {
    
    catchError: (state, action) => {
      state.error = `${action.payload.err}`;

      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
        state.actionsLoading = false;
      } else {
        state.actionsLoading = false;
        state.listLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
        state.actionsLoading2 = true;
      }
    },
    createAsk: (state, action) => {
      state.error = null;
    },
    gets: (state, action) => {
      state.error = null;
      state.leaves = action.payload;
    },
    updateAll: (state, action) => {
      state.error = null;
      state.leaves = action.payload;
    },
    update: (state, action) => {
      state.error = null;
      let item = action.payload;
      let updatedLeave = action.payload.leave;
      let index = state.leaves.map((object) => object.id).indexOf(item.id);
      let leaves = state.leaves;
      leaves[index] = updatedLeave;
      state.leaves = leaves;
    },
    remove: (state, action) => {
      state.error = null;
      let item = action.payload;
      let leaves = state.leaves;
      let index = leaves.map((object) => object.id).indexOf(item.id);
      leaves.splice(index, 1);
      state.leaves = leaves;
    },
    addAll: (state, action) => {
      state.error = null;
      state.leaves = state.leaves.concat(action.payload);
    },
    add: (state, action) => {
      state.error = null;
      state.leaves.push(action.payload);
    },
  },
});
