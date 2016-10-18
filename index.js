import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

// Components
import Header from './modules/components/Header'

// Pages
import Home from './modules/views/Home'
import Contact from './modules/views/Contact'
import Products from './modules/views/Products'
import Installation from './modules/views/Installation'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home}/>
      <Route path="contact" component={Contact}></Route>
      <Route path="products" component={Products}></Route>
      <Route path="installation" component={Installation}></Route>
    </Route>
  </Router>),
  document.getElementById('app')
)
