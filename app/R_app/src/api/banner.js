import {BANNER_DATA} from '@/server/url.js'
import {HOMELIST_DATA} from '@/server/url.js'

export default {
  bannerDataFn (cb) {
    fetch(BANNER_DATA)
      .then((res) => {return res.json()})
      .then((data) => {cb(data)})
      .catch((err) => {console.log(err)})
  },
  homeListDataFn (cb) {
    fetch(HOMELIST_DATA)
    .then((res) => {return res.json()})
    .then((data) => {cb(data)})
    .catch((err) => {console.log(err)})
  }
}