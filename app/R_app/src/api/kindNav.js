import {KIND_DATA_NAV} from '@/server/url.js'

export default {
  kindNavFn (cb) {
    fetch(KIND_DATA_NAV)
      .then((res) => {return res.json()})
      .then((data) => {cb(data)})
      .catch((err) => {console.log(err)})
  }
}