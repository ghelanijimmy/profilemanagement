import React from 'react';

export const Input = (props) => {
	return (
		<span>
			<label htmlFor={props.id}>{props.placeholder}</label>
			<input
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
				autoComplete={props.autocomplete !== undefined ? props.autocomplete : 'off'}
			/>
		</span>
	);
};