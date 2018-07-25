import {DESIGNER_DATA_URL, DESIGNER_DETAIL_URL} from '@/server/url.js'

export default {
  designerFn (cb) {
    fetch(DESIGNER_DATA_URL)
      .then(res => res.json())
      .then((data) => {cb(data)})
      .catch(err => console.log(err))
  },
  renovationDataDetailFn (id, cb) {
    fetch(DESIGNER_DETAIL_URL+'?id='+id)
      .then(res => res.json())
      .then((data) => {cb(data)})
      .catch(err => console.log(err))
  }
}