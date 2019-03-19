import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { Theme, withStyles } from "@material-ui/core/styles";
import { IApplicationProps } from "../../actions/restaurants";
import { IRestaurant } from "../../types";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Search } from "../../components/Search";

// TODO: MUI theme
// TODO: add responsive breakpoints with withWidth HOC method
const styles = (theme: Theme) => ({
	root: {
		flexGrow: "1"
	},
	detail: {
		display: "none"
	},
	avatar: {
		filter: "invert(100%)"
	},
	listText: {
		color: "#FFF"
	},
	loading: {
		marginTop: "25vh",
		position: "absolute"
	},
	primary: {
		color: "#FFF"
	},
	links: {
		color: "#FFF",
		textDecoration: "none"
	}
});

interface IRestaurantListProps extends IApplicationProps {
	classes: any;
	success: boolean;
	restaurants: IRestaurant[];
}

class ListContainer extends React.Component<IRestaurantListProps, {}> {
	public render() {
		const { classes } = this.props;
		const RestaurantList = this.RestaurantList;

		return (
			<div className={classes.root}>
				<Search onSubmit={this.props.fetchGeolocation} />
				<RestaurantList {...this.props} />
			</div>
		);
	}

	private RestaurantList = (props: IRestaurantListProps) => {
		const RestaurantItem = this.RestaurantItem;
		const { classes, success, restaurants } = props;

		if (success) {
			return (
				<div>
					{restaurants &&
						restaurants.map((item: any, key: any) => {
							console.log("item", item);
							return RestaurantItem(item, key);
						})}
				</div>
			);
		} else {
			return <div className={classes.loading}>Loading...</div>;
		}
	};

	private RestaurantItem = (item: IRestaurant, key: any) => {
		const { classes } = this.props;
		if (item && item.venue.name) {
			const namedKey = "restaurant_" + key;
			const { name } = item.venue;
			let iconSrc = "https://ss3.4sqi.net/img/categories_v2/building/default_32.png";
			let listItemAv = <Avatar className={classes.avatar} src={iconSrc} />;
			let secondaryText = <ListItemText color="textSecondary" secondary={""} primary={name} />;
			if (item.venue.categories.length) {
				const [
					{
						name: categoryName,
						icon: { prefix, suffix }
					}
				] = item.venue.categories;
				iconSrc = prefix + "32" + suffix;
				listItemAv = <Avatar className={classes.avatar} src={iconSrc} />;
				secondaryText = <ListItemText color="textSecondary" secondary={categoryName} primary={name} />;
			}
			return (
				<div key={namedKey}>
					<Link className={classes.links} to="/detail">
						<ListItem onClick={() => this.props.handleDetailChange(key)} className={classes.listItem}>
							<ListItemAvatar>{listItemAv}</ListItemAvatar>
							{secondaryText}
						</ListItem>

						<Divider variant="inset" />
					</Link>
				</div>
			);
		}
	};
}
export default withStyles(styles as any)(ListContainer);
