import { channel } from "redux-saga";
import { all, put, takeLatest, take } from "redux-saga/effects";
import { RestaurantActionTypes, GeolocationActionTypes } from "../types";

export const locationChannel = channel();
/* eslint-disable-next-line */
export function* fetchCurrentPosition(options) {
	const { query } = options;

	locationChannel.put({ type: GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_REQUEST });

	navigator.geolocation.getCurrentPosition(
		(position) => {
			locationChannel.put({ type: GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_SET_POSITION, position, query });
		},
		(error) => locationChannel.put({ type: GeolocationActionTypes.REDUX_SAGA_LOCATION_ACTION_SET_ERROR, error }),
		options
	);
}
/* eslint-disable-next-line */
export function* watchCurrentPosition(options) {
	locationChannel.put({ type: "REDUX_SAGA_LOCATION_ACTION_REQUEST" });

	navigator.geolocation.watchPosition(
		(position) => {
			locationChannel.put({ type: "REDUX_SAGA_LOCATION_ACTION_SET_POSITION", position });
		},
		(error) => locationChannel.put({ type: "REDUX_SAGA_LOCATION_ACTION_SET_ERROR", error }),
		options
	);
}

function* fetchRestaurants(payload) {
	const {
		position: { coords },
		query
	} = payload;

	const venuesEndpoint = "https://api.foursquare.com/v2/venues/explore?";
	const params = {
		client_id: "0EB5JC4WFWHKXIY4BWR3UMHLOCCQ4M1UNKKFNUDFA5JKV3VM",
		client_secret: "NF3HSWXWJGJKG40YM4BIWELNWHZISLKR4KTYZPB3WSZXAGM0",
		limit: 100,
		query,
		v: "20130619",
		ll: coords.latitude + "," + coords.longitude
	};
	const url = venuesEndpoint + new URLSearchParams(params);
	try {
		const payload = yield fetch(url, {
			method: "GET"
		}).then((response) => response.json());

		yield put({
			type: RestaurantActionTypes.RESTAURAUNTS_FETCH_DATA_SUCCESS,
			payload: payload.response.groups[0].items
		});
	} catch (error) {
		yield put({ type: "RESTAURAUNTS_FETCH_DATA_FAIL", error });
	}
}

export function* locationWatcher() {
	while (true) {
		const action = yield take(locationChannel);
		yield put(action);
	}
}

function* actionWatcher() {
	yield takeLatest("REDUX_SAGA_LOCATION_ACTION_SET_POSITION", fetchRestaurants);
	yield takeLatest("GET_GEOLOCATION", fetchCurrentPosition);
}

export default function* rootSaga() {
	yield all([actionWatcher(), locationWatcher()]);
}
