import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '@/components/Home.jsx'
import Header from '@/components/Header.jsx'
import Renovation from '@/components/Renovation.jsx'

import Material from '@/components/Material.jsx'
import Community from '@/components/Community.jsx'

class App extends Component {
  constructor (props) {
    super (props)
  }
  
  render () {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/renovation' component={Renovation} />
          <Route path='/material' component={Material} />
          <Route path='/community' component={Community} />
        </Switch>
      </div>
    )
  }
}

export default App