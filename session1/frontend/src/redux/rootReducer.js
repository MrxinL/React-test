import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import marketplaceReducer from "./slices/marketplace";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  marketplace: marketplaceReducer,
});

export { rootPersistConfig, rootReducer };
