import React, {Component} from 'react'
import renovationApi from '@/api/renovation.js'
import designerApi from '@/api/designer.js'
import {Link} from 'react-router-dom'

class Renovation extends Component {
  constructor (props) {
    super (props)
    this.state = {
      renovationList: [],
      designerList: []
    }
  }
  componentDidMount () {
    renovationApi.renovationDataFn ((data) => {
      // console.log(data)
      // console.log(typeof data)
      this.setState({
        renovationList: data
      })
    })
    designerApi.designerFn((data) => {
      // console.log(data)
      // console.log(data[0].case_list[0].cover_img)
      this.setState({
        designerList: data
      })
    })
  }
 
  render () {
    return (
      <div className="content">
        <div className="ren_shop">
          装修公司
        </div>
        <ul className="renovationList">
          {
            this.state.renovationList.map((item, index) => {
              return (
                <li key={item.list.shop_id}>
                  <img src={item.list.shop_logo} />
                  <div className="renlist">
                    <p>{item.list.shop_name}</p>
                    <p>好评率:&nbsp;{item.good_percent}%</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="designer">
        	<div className="designer_top">本月热门设计师</div>
          <ul className="designer_list">
          {
            this.state.designerList.map((item,index) => {
              return (
                <li key={item.shop_id}>
                  <Link to={'designerDetail/'+item.shop_id} >
                    <div className="designer_detail">
                      <div className="designer_role"><img src={item.role_img} /></div>
                      <div className="designer_picture">
                        <p className="designer_name">{item.role_name}<span>{item.shop_name}</span></p>
                        <p className="designer_eg">案例:{item.case_count}套<span>擅长:{item.fengge}</span></p>
                      </div>
                    </div>
                  </Link>
                	<div className="picture_B">
                		<ul>
                			<li><img src={item.case_list[0].cover_img} /></li>
                			<li><img src={item.case_list[1].cover_img} /></li>
                			<li><img src={item.case_list[2].cover_img} /></li>
                		</ul>
                	</div>
                  
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

// <a href={'http://m.jia.com/zx/shejishi/'+item.admin_shop_role_id+'-'+item.shop_id}>

export default Renovation