import './App.css';

import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



export default class App extends Component {
  render() {
    
    return (
      <Router>           
        <Nav />
        <Routes>

          {/* <Route key="general" path='/'   element={<News category="general"/>}  />
          <Route key="business" path='/business'   element={<News category="business"/>}  />
          <Route key="entertainment" path='/entertainment'   element={<News category="entertainment"/>}  />
          <Route key="health" path='/health'   element={<News category="health"/>}  /> */}
          {/* <Route key="science" path='/science'   element={<News category="science"/>}  /> */}
          {/* <Route key="science" path='/science'   element={< NewsWrapper/>}  />
          <Route key="technology" path='/technology'   element={<News category="technology"/>}  /> */}
          {/* <Route key="technology" path='/technology' element={<News />}  /> */}

          
          <Route key="general" path='/'   element={<General/>}  />
          <Route key="business" path='/business'   element={<Business/>}  />
          <Route key="entertainment" path='/entertainment'   element={<Entertainment/>}  />
          <Route key="health" path='/health'   element={<Health/>}  />
          <Route key="science" path='/science'   element={< Science/>}  />
          <Route key="technology" path='/technology'   element={<Technology/>}  />
          
        </Routes>
      </Router>



    )
  }
}

// function NewsCategory({ category }) {
//   return <News category={category} />;
// }

function General() {
  return <News category='general' />
}
function Business() {
  return <News category='business' />
}
function Entertainment() {
  return <News category='entertainment' />
}
function Health() {
  return <News category='health' />
}
function Science() {
  return <News category='science' />
}
function Technology() {
  return <News category='technology' />
}
