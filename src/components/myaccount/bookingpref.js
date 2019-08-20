import React    from "react";
import Consumer from "../context/consumer";

const Bookingpref = (props) => {
	return (
		<React.Fragment>
			{props.header}
		</React.Fragment>
	);
};

export default Consumer(Bookingpref);