import React, { Component } from 'react';
import {HashRouter as Router,Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import ResultContainer from './containers/ResultContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='jumbotron'>
            <h1>Movie Finder</h1>
            <p><i>Good films make your life better!</i></p>
          </nav>
          <Route path='/' exact component={ MovieSearchContainer} />
          <Route path='/movieInfo/:value' component={ ResultContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    )
  }
}