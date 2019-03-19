import * as React from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

interface Props {
	isMarkerShown: boolean;
	latLng: any;
	label: any;
}

const Location = withScriptjs(
	withGoogleMap((props: Props) => (
		<GoogleMap defaultZoom={14} center={props.latLng} defaultCenter={props.latLng}>
			<Marker label={props.label} position={props.latLng} />
		</GoogleMap>
	))
);

export default Location;
