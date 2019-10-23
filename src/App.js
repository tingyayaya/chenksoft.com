import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import { hot } from 'react-hot-loader';
import routes from '@/routes/routes'
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes'

import { HashRouter as Router, Switch, Route, Link, withRouter, Redirect} from "react-router-dom";

import domain from '@/utils/getDomainName'

import '@/css/normalize.css'
import '@/css/app.scss'

require('bootstrap');

@inject('store')
@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '晨科软件'
    }
  }
  componentDidMount() {
    this.props.store.SysNameApi._getSysName()
  }
  render() {
    document.title = this.props.store.SysNameApi.data
    //<Router basename={domain.basename? '/'+domain.name: ''}>
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Route path="/" exact={true} />
          <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
          <Route path="*" render={(props) => <Redirect to='/error'/>}/>
        </Switch>
      </Router>
    )
  }
}

export default hot(module)(App)