import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  constructor (props) {
    super (props)
  }
  
  render(){
    return (
      <div className="pubHeader">
      	<header>
          <ul className="pubTop">
            <li><img src="//mued3.jia.com/image/mobile/m_sygb/new_header/jia_logo.png" /></li>
            <li>上海<i className="iconfont icon-icon32210"></i></li>
            <li><i className="iconfont icon-tousu"></i>投诉</li>
            <li><i className="iconfont icon-fangdajing"></i></li>
            <li><i className="iconfont icon-wode"></i></li>
          </ul>
        </header>
      	<ul className="headerNav">
      		<li className="active"><NavLink to='/home'>首页</NavLink></li>
      		<li><NavLink to='/renovation'>找装修</NavLink></li>
      		<li><NavLink to='/material'>选建材</NavLink></li>
      		<li><NavLink to='/community'>社区</NavLink></li>
      	</ul>
      </div>
    )
  }
}

export default Header