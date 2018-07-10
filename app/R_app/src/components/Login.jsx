import React, {Component} from 'react'

class Login extends Component {
  constructor (props) {
    super (props)
  }
  
  render () {
    return (
      <div className="login">
        <div className="loginHeader">登录头部</div>
        <div className="loginMain">登录部分</div>
      </div>
    )
  }
}

export default Login