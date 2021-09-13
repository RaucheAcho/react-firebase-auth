import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "./modal/modal.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
