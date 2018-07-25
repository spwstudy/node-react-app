import React, {Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import bannerApi from '@/api/banner.js'
import kindNavApi from '@/api/kindNav.js'
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bannerdata: [],
      imgHeight: 176,
      kindNav: [],
      indexActive: -1,
      homeList: []
    }
  }
  componentDidMount() {
    bannerApi.homeListDataFn ((data) => {
      // console.log(data[1].shop_id)
      this.setState({
        homeList:data
      })
    })
    kindNavApi.kindNavFn ((data) => {
      // console.log(data)
      this.setState({
      	kindNav: data
      })
    })
    setTimeout(() => {
      bannerApi.bannerDataFn((data) => {
        // console.log(data)
        this.setState({
        	bannerdata: data
        })
      })
      
    }, 100)
  }
  
  getClassData (index) {
    // console.log(index)
    this.setState({
      indexActive: index
    })
    // this.getDetailData(shop_id)
  }
  render () {
    return (
      <div className="content">
        <ul className="kindNav">
          {
            this.state.kindNav.map((item, index) => {
              return (
                <li key={item.classID} onClick={this.getClassData.bind(this,index)} className={this.state.indexActive == index ? "navActive" : ""}>{item.className}</li>
              )
            })
          }
        </ul>
        <div>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.bannerdata.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.img}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
          <ul className="imgList">
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_mfsj.png" /><p>免费设计</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_znbj.png" /><p>只能报价</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_vrqj.png" /><p>3D全景家装</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_zxmt.png" /><p>装修美图</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_zxgs.png" /><p>装修公司</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_kbwp.png" /><p>口碑旺铺</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_xchd.png" /><p>家博会</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/wxStore/ppg-icon.png" /><p>品牌馆</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_lt.png" /><p>装修论坛</p></li>
            <li><img src="http://mued3.jia.com/image/mobile/m_sygb/first_page/icon_list_mxd.png" /><p>专享货</p></li>
          </ul>
          <div className="bigImg">
            <img src="//mued3.jia.com/image/mobile/new_home/nj-new.png" />
          </div>
          <ul className="homeList">
            {
              this.state.homeList.map((item, index) => {
                return (
                  <Link to={'/detail/'+item.shop_id} key={item.shop_id}>
                    <li>
                      <img src={'http://imgwangpu.tg.com.cn/'+item.logo_url} />
                      <div>
                        <p>{item.shop_name}</p>
                        <p>口碑值:&nbsp;<span>{item.credit_value}</span></p>
                        <p>享优惠</p>
                      </div>
                    </li>
                  </Link>
                )
              })
            }
            
          </ul>
         
        </div>
        
      </div>
    )
  }
}

export default Home