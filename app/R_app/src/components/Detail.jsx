import React, {Component} from 'react'

class Detail extends Component {
  constructor (props) {
    super (props)
  }
  
  render () {
    return (
      <div className="detail">
        <div className="detailHeader">详情头部</div>
        <div className="detailMain">详情部分</div>
      </div>
    )
  }
}

export default Detail