import React, { useState} from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/redux_all_in_one.js';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


import Navigation from "./components/Navigation/Navigation";
import Header from './components/Header/Header';
import InpageNav from './components/InpageNav/InpageNav';
import Content from './components/Content/Content';
import Additions from './components/Additions/Additions';
import Footer from './components/Footer/Footer';
import NewPost from './components/NewPost/NewPost';
import Post from './components/Post/Post';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <div className="container-main">
            <Header />
            <div className="content-n-footer">
              <div className="wrapper">
                <InpageNav />
                <Switch>
                  <Route path="/new" component={NewPost} />
                  <Route path="/posts/:id" component = {Post}  />
                  <Route path="/" component = {Content} />
                </Switch>
                <Additions />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </Provider>
      
  );
}

export default App;
