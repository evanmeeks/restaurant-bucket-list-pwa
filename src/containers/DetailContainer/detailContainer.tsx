import Location from "../../components/Map/Location";
import { Theme, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import * as React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IRestaurant } from "../../types";

const styles = (theme: Theme) => ({
	root: {
		flexGrow: "1"
	},
	detailName: {
		color: "white",
		fontFamily: "Montserrat, san-serif",
		fontWeight: "500",
		fontSize: "2rem"
	},
	detailCategory: {
		color: "white",
		fontFamily: "Montserrat",
		fontWeight: "400",
		fontSize: "1rem"
	},
	content: {
		fontFamily: "Montserrat",
		fontWeight: "500",
		fontSize: "1rem"
	},
	cardContent: {
		padding: "0px"
	}
});

interface DetailProps {
	classes?: any;
	restaurant?: IRestaurant;
}

const DetailContainer: React.FC<DetailProps> = (props) => {
	const { restaurant } = props;

	const MapElement = ({ item }: any) => {
		const { classes } = props;

		if (item && item.venue) {
			const { lat, lng } = item.venue.location;
			// Inline styling per specifications from the example
			// TODO: add responsive breakpoints with withWidth HOC method
			return (
				<CardContent className={classes.cardContent}>
					<Location
						label={item.venue.name}
						isMarkerShown={true}
						latLng={{
							lat,
							lng
						}}
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtELQTGYqy8mYIS-jGVg4WGcJYc1NRA4E&v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `350px` }} />}
						containerElement={<div style={{ height: `350px` }} />}
						mapElement={<div style={{ height: `350px` }} />}
					/>
				</CardContent>
			);
		} else {
			return null;
		}
	};

	const Details = ({ item }: any) => {
		const { classes } = props;

		if (item && item.venue) {
			const { name, location } = item.venue;
			let iconSrc = "https://ss3.4sqi.net/img/categories_v2/building/default_32.png";
			let listItemAv = <Avatar className={classes.avatar} src={iconSrc} />;
			let secondaryText = (
				<Typography className={classes.detailCategory} component="p">
					Business
				</Typography>
			);
			if (item.venue.categories.length) {
				const [
					{
						name: categoryName,
						icon: { prefix, suffix }
					}
				] = item.venue.categories;
				iconSrc = prefix + "32" + suffix;
				listItemAv = <Avatar className={classes.avatar} src={iconSrc} />;
				secondaryText = (
					<Typography className={classes.detailCategory} component="p">
						{categoryName}
					</Typography>
				);
			}

			return (
				<CardContent className={classes.cardContent}>
					<CardHeader
						style={{ backgroundColor: "blue" }}
						className={classes.detailCategory}
						avatar={listItemAv}
						title={
							<Typography className={classes.detailName} component="p">
								{name}
							</Typography>
						}
						subheader={secondaryText}
					/>
					<Typography className={classes.content} component="p">
						{location.formattedAddress}
					</Typography>
				</CardContent>
			);
		} else {
			return null;
		}
	};

	return (
		<>
			<MapElement item={restaurant} />
			<Details item={restaurant} />
		</>
	);
};

export default withStyles(styles as any)(DetailContainer);
