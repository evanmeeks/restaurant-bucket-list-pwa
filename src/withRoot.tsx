import * as React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: pink,
		error: red,
		// Used by `getContrastText()` to maximize the contrast between the background and
		// the text.
		contrastThreshold: 3,
		// Used to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2
	}
});

function withRoot<P>(Component: React.ComponentType<P>) {
	function WithRoot(props: P) {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...props} />
			</MuiThemeProvider>
		);
	}
	return WithRoot;
}

export default withRoot;
