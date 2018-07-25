import {RENOVATION_DATA_URL} from '@/server/url.js'

export default {
  renovationDataFn (cb) {
    fetch(RENOVATION_DATA_URL)
      .then((res) => {return res.json()})
      .then((data) => {cb(data)})
      .catch((err) => {console.log(err)})
  }
}