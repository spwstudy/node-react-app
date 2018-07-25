import React, {Component} from 'react'
import detailApi from '@/api/detail.js'

class Detail extends Component {
  constructor (props) {
    super (props)
    this.state = {
      shop_id: '',
      image_url: '',
      shop_address: '',
      shop_name: ''
    }
  }
  componentDidMount(){
    console.log(this.props);
    // console.log(this.props.location.pathname.split('/')[2])
    const shop_id = this.props.location.pathname.split('/')[2]
    // console.log(shop_id)
    detailApi.detailDataFn (shop_id, (data) => {
      // console.log(data)
      this.setState({
        shop_id: data[0].shop_id,
        image_url: data[0].image_url,
        shop_address: data[0].shop_address,
        shop_name: data[0].shop_name
      })
    })
  }
  goBackhandler () {
    // console.log(this.props)
    this.props.history.goBack();
  }
  render () {
    return (
      <div className="container">
        <div className="detailAll">
          <div className="detailHeader">
            <ul>
              <li onClick={this.goBackhandler.bind(this)}><i className="iconfont icon-arrows-copy-copy"></i></li>
              <li>详情头部</li>
              <li><i className="iconfont icon-fenxiang"></i></li>
            </ul>
          </div>
          <div className="detailMain">
            <img src={'http://imgwangpu.tg.com.cn/'+this.state.image_url} />
            <div>
              <p>{this.state.shop_name}</p>
              <p>{this.state.shop_address}</p>
            </div>
          </div>
          <ul className="detailFooter">
            <li><i className="iconfont icon-guanzhu"></i></li>
            <li><i className="iconfont icon-xie"></i></li>
            <li>预约店铺</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Detail