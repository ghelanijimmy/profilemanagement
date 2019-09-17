import React    from "react";
import Consumer from "../context/consumer";

const Voucher = (props) => {
	return (
		<div>
			<div>
				<p>Congratulations {props.data.user}! Hee is your first voucher.</p>
			</div>
		</div>
	);
};

export default Consumer(Voucher);