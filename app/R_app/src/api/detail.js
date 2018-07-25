import {DETAIL_DATA_URL} from '@/server/url.js'

export default {
  detailDataFn (shop_id, cb){
    fetch(DETAIL_DATA_URL+'?id='+shop_id)
      .then((res) => {return res.json()})
      .then((data) => {cb(data)})
      .catch((err) => {console.log(err)})
    
  }
}