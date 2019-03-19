import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import withRoot from "./withRoot";
import Routes from "./containers/Routes";

const store = configureStore();

class App extends React.Component<{}, {}> {
	public render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default withRoot(App);
