import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import restaurantsReducer from "./restaurantsReducer";

const RootState = combineReducers({
	locationReducer,
	restaurantsReducer
});

export default RootState;
