import * as React from "react";
import { Route, withRouter } from "react-router-dom";
import ListContainer from "./ListContainer";
import DetailContainer from "./DetailContainer";
import Header from "../components/Header";
import { connect } from "react-redux";
import { fetchGeolocation, IApplicationProps } from "../actions/restaurants";

interface IRouteLocation {
	pathname: string;
	search: string;
	hash: string;
	key: string;
}

interface IRouteProps extends IApplicationProps {
	location: IRouteLocation;
}

class Routes extends React.Component<IRouteProps, {}> {
	public componentDidMount() {
		this.props.fetchGeolocation("Restaurants");
	}

	public render() {
		const { location } = this.props;
		if (location && location.pathname) {
			const detail: boolean = location.pathname === "/detail";
			return (
				<div className="App">
					<Header searchHandler={this.props.fetchGeolocation} detail={detail} />
					<div style={{ marginTop: "40px" }}>
						<Route exact path="/" component={ListContainer} />
						<Route path="/detail" component={DetailContainer} />
					</div>
				</div>
			);
		}
	}
}
const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchGeolocation: (payload: any) => dispatch(fetchGeolocation(payload))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Routes as any));
