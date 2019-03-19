interface ILocation {
	pathname: string;
	search: string;
	hash: string;
	key: string;
	address?: string;
	lat?: number;
	lng?: number;
	labeledLatLngs?: ILabeledLatLngsItem[];
	distance?: number;
	postalCode?: string;
	cc?: string;
	city?: string;
	state?: string;
	country?: string;
	formattedAddress?: string[];
}

export interface IRestaurant {
	reasons: IReasons;
	venue: IVenue;
	referralId: string;
}

interface IReasons {
	count: number;
	items: IItemsItem[];
}

interface IItemsItem {
	summary: string;
	type: string;
	reasonName: string;
}
export interface IVenue {
	id: string;
	name: string;

	location: ILocation;
	categories: ICategoriesItem[];
}

interface ILabeledLatLngsItem {
	label: string;
	lat: number;
	lng: number;
}

export interface ICategoriesItem {
	id: string;
	name: string;
	pluralName: string;
	shortName: string;
	icon: IIcon;
	primary: boolean;
}

interface IIcon {
	prefix: string;
	suffix: string;
}

export interface IRestaurantState {
	restaurants: IRestaurant[];
	success: boolean;
	error: any;
}

export interface ILocationState {
	position: string;
	error: any;
	fetching: boolean;
	success: boolean;
}

export enum GeolocationActionTypes {
	GET_GEOLOCATION = "GET_GEOLOCATION",
	GET_GEOLOCATION_SUCCESS = "GET_GEOLOCATION_SUCCESS",
	REDUX_SAGA_LOCATION_ACTION_SET_POSITION = "REDUX_SAGA_LOCATION_ACTION_SET_POSITION",
	REDUX_SAGA_LOCATION_ACTION_SET_ERROR = "REDUX_SAGA_LOCATION_ACTION_SET_ERROR",
	REDUX_SAGA_LOCATION_ACTION_REQUEST = "REDUX_SAGA_LOCATION_ACTION_SET_ERROR"
}
export enum RestaurantActionTypes {
	FETCH_RESTAURANTS = "FETCH_RESTAURANTS",
	RESTAURAUNTS_FETCH_DATA_SUCCESS = "RESTAURAUNTS_FETCH_DATA_SUCCESS",
	RESTAURAUNTS_FETCH_DATA_FAIL = "RESTAURAUNTS_FETCH_DATA_FAIL",
	HANDLE_DETAIL = "HANDLE_DETAIL"
}
