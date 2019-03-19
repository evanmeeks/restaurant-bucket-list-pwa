import * as React from "react";
import { Link } from "react-router-dom";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ChevronIcon from "@material-ui/icons/ChevronLeft";

const styles = (theme: Theme) =>
	createStyles({
		root: {
			width: "100%"
		},
		grow: {
			flexGrow: 1
		},
		menuButton: {
			marginLeft: -12,
			marginRight: 20
		},
		title: {
			display: "none",
			[theme.breakpoints.up("sm")]: {
				display: "block"
			}
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: fade(theme.palette.common.white, 0.25)
			},
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing.unit,
				width: "auto"
			}
		},
		searchIcon: {
			width: theme.spacing.unit * 9,
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		inputHide: {
			display: "none"
		},
		inputRoot: {
			color: "inherit",
			width: "100%"
		},
		inputInput: {
			paddingTop: theme.spacing.unit,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit,
			paddingLeft: theme.spacing.unit * 10,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: 120,
				"&:focus": {
					width: 200
				}
			}
		}
	});

export interface Props extends WithStyles<typeof styles> {
	searchHandler: any;
	detail: boolean;
}

function Header(props: Props) {
	const { classes, detail } = props;
	let link = null;

	if (detail) {
		link = (
			<Link to="/">
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<ChevronIcon />
				</IconButton>
			</Link>
		);
	}

	const searchHandler = ({ target: { value } }: any) => {
		props.searchHandler(value);
	};

	return (
		<AppBar className="header" position="fixed">
			<Toolbar>
				{link}
				<div className={classes.grow} />
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						onChange={searchHandler}
						classes={
							detail
								? { root: classes.inputHide, input: classes.inputInput }
								: {
										root: classes.inputRoot,
										input: classes.inputInput
								  }
						}
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
}
export default withStyles(styles)(Header);
