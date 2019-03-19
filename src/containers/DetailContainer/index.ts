import DetailContainer from "./detailContainer";
import { connect } from "react-redux";
import { getCurrentRestaurant } from "../../selectors";

interface IRestaurantListState {
	uiReducer: any;
	restaurantsReducer: any;
	expanded?: boolean;
	restaurant?: any[];
}

const mapStateToProps = (state: IRestaurantListState) => {
	return {
		restaurant: getCurrentRestaurant(state)
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailContainer as any);
