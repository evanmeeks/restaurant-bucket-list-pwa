import ListContainer from "./listContainer";
import { connect } from "react-redux";
import { getAllRestaurants, areRestaurantsLoaded } from "../../selectors";
import { handleDetailChange } from "../../actions/restaurants";

import { IRestaurant } from "../../types";

interface IRestaurantListState {
	uiReducer: any;
	restaurantsReducer: any;
	expanded?: boolean;
	restaurant: IRestaurant[];
}

const mapStateToProps = (state: IRestaurantListState) => {
	return {
		restaurants: getAllRestaurants(state),
		success: areRestaurantsLoaded(state)
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		handleDetailChange: (payload: any) => dispatch(handleDetailChange(payload))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListContainer as any);
