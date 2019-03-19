import { Action } from "redux";
import { GeolocationActionTypes, RestaurantActionTypes } from "../types";

export interface IAppAction extends Action<RestaurantActionTypes | GeolocationActionTypes> {
	payload?: any;
	query?: string;
}

export interface IApplicationProps {
	handleDetailChange: (payload?: IAppAction) => IAppAction;
	fetchRestaurants: (payload?: IAppAction) => IAppAction;
	fetchGeolocation: (payload?: string) => IAppAction;
}

export const handleDetailChange = (payload?: IAppAction): IAppAction => ({
	type: RestaurantActionTypes.HANDLE_DETAIL,
	payload
});

export const fetchRestaurants = (payload?: IAppAction): IAppAction => ({
	type: RestaurantActionTypes.FETCH_RESTAURANTS,
	payload
});

export const fetchGeolocation = (query?: string): IAppAction => ({
	type: GeolocationActionTypes.GET_GEOLOCATION,
	query
});
