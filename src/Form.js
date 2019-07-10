import React, {Component} from 'react'
import {SignUp} from "./components/signup/signup";

class Form extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      appType: ''
    }
  }
  
  componentDidMount() {
    console.log(this.state)
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state)
  }
  
  render() {
    
    if(this.state.appType === 'login'){
      return <div>LOGIN</div>
    } else if(this.state.appType === 'create') {
      return <SignUp />
    } else {
      return ''
    }
    
  }
}

export default Form