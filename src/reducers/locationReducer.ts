import { GeolocationActionTypes, ILocationState } from "../types";
import { AnyAction } from "redux";

const intitalState: ILocationState = {
	position: "",
	error: null,
	fetching: false,
	success: false
};

export default function locationReducer(state = intitalState, action: AnyAction) {
	switch (action.type) {
		case GeolocationActionTypes.GET_GEOLOCATION_SUCCESS: {
			return {
				...state,
				restaurants: action.payload,
				success: true
			};
		}
		case GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_REQUEST: {
			return {
				...state,
				fetching: true
			};
		}
		case GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_SET_POSITION: {
			return {
				...state,
				position: action.position,
				fetching: false
			};
		}
		case GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_SET_ERROR: {
			return {
				...state,
				error: action.error,
				fetching: false
			};
		}
		default: {
			return state;
		}
	}
}
