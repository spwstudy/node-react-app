import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import ErrorBoundary from '@/components/ErrorBoundary.jsx'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import Detail from '@/components/Detail.jsx'
import Register from '@/components/Register.jsx'
import Login from '@/components/Login.jsx'
import DesignerDetail from '@/components/DesignerDetail.jsx'
import './main.scss'


ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route  path='/designerDetail' component={DesignerDetail}/>
        <Route  path='/detail' component={Detail}/>
        <Route  path='/login' component={Login}/>
        <Route  path='/register' component={Register}/>
        <Route  path='/' component={App}/>
      </Switch>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
)
