import React, {Component} from 'react'
import {Input} from "../input/input";

export class SignUp extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<form>
				<h3>Create Sunwing Account</h3>
				<Input
					type={'email'}
					id={'email'}
					placeholder={'Email'}
				/>
				<Input
					type={'password'}
					id={'password'}
					placeholder={'Password'}
				/>
				<Input
					type={'text'}
					id={'fName'}
					placeholder={'First Name'}
				/>
				<Input
					type={'text'}
					id={'lName'}
					placeholder={'Last Name'}
				/>
				<Input
					type={'tel'}
					id={'mobile'}
					placeholder={'Mobile#'}
				/>
			</form>
		)
	}
}