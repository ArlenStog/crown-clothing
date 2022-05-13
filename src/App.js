import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser:null
    }
  }
  
  unsibscribeFromAuth = null;

  componentDidMount(){
    this.unsibscribeFromAuth=auth.onAuthStateChanged(user => {
       this.setState({currentUser : user}); 
        console.log(user);
      })
  }
  componentWillUnmount(){
    this.unsibscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
      <Route exact  path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/signin' component={SignInSignOutPage}></Route>
      </Switch>
      </div>
    );
  }

}

export default App;
