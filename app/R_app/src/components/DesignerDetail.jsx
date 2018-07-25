import React, {Component} from 'react'
import renovationDetail from '@/api/designer.js'
// import designerApi from '@/api/designer.js'

class DesignerDetail extends Component {
  constructor (props) {
    super (props)
    this.state = {
      id: '',
      role_img: '',
      role_name: '',
      profess_level: '',
      work_years: '',
      case_count: '',
      introduction: '',
      arr: []
    }
  }
  // data[0].case_list[0].case_name
  componentDidMount () {
    // console.log(this.props.location.pathname.split('/')[2])
    var id = this.props.location.pathname.split('/')[2]
    // console.log(id)
    renovationDetail.renovationDataDetailFn(id, (data) => {
      // console.log(data)
      this.setState({
        arr: data,
        id: data[0].id,
        role_img: data[0].role_img,
        role_name: data[0].role_name,
        profess_level: data[0].profess_level,
        work_years: data[0].work_years,
        case_count: data[0].case_count,
        introduction: data[0].introduction
      })
    })
    
//     designerApi.designerFn((data) => {
//       console.log(data[0].case_list[0].case_name)
//       this.setState({
//         arr: data
//       })
//     })
  }
  toRenovation () {
    // console.log(this)
    this.props.history.goBack()
  }
  
  render () {
    return (
      <div className="container">
        <div className="designer_all">
          <div className="designer_header">
            <ul className="designer_back">
              <li><i className="iconfont icon-arrows-copy-copy" onClick={this.toRenovation.bind(this)}></i></li>
              <li><i className="iconfont icon-fenxiang"></i></li>
            </ul>
          </div>
          <div className="designer_main_con">
            <div className="designer_M">
              <div><img src={this.state.role_img} /></div>
              <div><p>{this.state.role_name}<span>{this.state.profess_level}</span></p></div>
              <div>从业{this.state.work_years}年 | 案例{this.state.case_count}套</div>
              <div>{this.state.introduction}</div>
              <div>
                <span>与TA互动</span>
                <span>免费预约TA</span>
              </div>
            </div>
            
            {
              this.state.arr.map((item, index) => {
                return (
                  <div className="case" key={item.shop_id}>
                  	<div className="caseName">案例作品({item.case_count}套)</div>
                  	<img src={item.case_list[0].cover_img} />
                  	<div className="case_home">
                  		<p>{item.case_list[0].case_name}</p>
                  		<p>
                  			<span>{item.case_list[0].huxing},{item.case_list[0].mianji},{item.case_list[0].fengge}</span>
                  			<span>点赞 {item.case_list[0].good_comment_num}&nbsp; 浏览 {item.case_list[0].preview_num}</span>
                  		</p>
                  	</div>
                    <img src={item.case_list[1].cover_img} />
                    <div className="case_home">
                    	<p>{item.case_list[1].case_name}</p>
                    	<p>
                    		<span>{item.case_list[1].huxing},{item.case_list[1].mianji},{item.case_list[1].fengge}</span>
                    		<span>点赞 {item.case_list[1].good_comment_num}&nbsp; 浏览 {item.case_list[1].preview_num}</span>
                    	</p>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    )
  }
}

export default DesignerDetail

// <div className="case_pic">