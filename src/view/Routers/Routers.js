import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
 
import Header from 'components/Header'
import Posts from 'view/Posts'

export default class Routers extends Component {

  render() { 
    return (
      <section>
        <Header />
        
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </section>
    )
  }
}
