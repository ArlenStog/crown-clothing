import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact  path='/' component={HomePage}></Route>
    <Route path='/shop' component={ShopPage}></Route>
    <Route path='/signin' component={SignInSignOutPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
