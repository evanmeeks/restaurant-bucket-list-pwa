import * as React from "react";

const DebugProps = (props: any) => {
	return <pre style={{ marginTop: "100px" }}>{JSON.stringify(props, null, 4)}</pre>;
};

export default DebugProps;
