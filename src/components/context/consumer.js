import React   from "react";
import Context from "./context";

const Consumer = (Component) => {
	return function consumerComponent(props){
		return(
			<Context.Consumer>
				{value=>{
					return <Component {...props} data={value}/>
				}}
			</Context.Consumer>
		)
	}
};

export default Consumer;