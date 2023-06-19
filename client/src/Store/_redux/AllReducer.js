import { persistReducer, persistStore } from "redux-persist";
import { createStore } from "redux";
import * as authSlice from "./AuthStore/authSlice";
import * as leaveSlice from "./LeaveStore/leaveSlice"
import storage from "redux-persist/lib/storage";

export const authReducer = persistReducer(
  { storage, key: "state-auth", blacklist: [] },
  authSlice.Slice.reducer
);

export const leaveReducer = persistReducer(
  { storage, key: "state-leave", blacklist: [] },
  leaveSlice.Slice.reducer
);
const authStore = createStore(authReducer);

const leaveStore = createStore(leaveReducer);

persistStore(authStore);
persistStore(leaveStore);

