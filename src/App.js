import React, {useEffect, useState} from 'react';
import LoginPage from './screens/login';
import { auth } from './screens/firebase';
import NavBar from './navBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routing from './router';
import store from './redux/store';
import {Provider} from 'react-redux';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if(user){
      setCurrentUser({
        uid: user.uid,
        email: user.email
      })
    }else{
      setCurrentUser(null)
    }
    })
  }, []);

  return (
    <Provider store={store}>
      {currentUser ? <HomeComponent /> : <LoginPage />}
    </Provider>
  );
}

const HomeComponent = () => {
  return(
      <Router>
          <NavBar />
          <Routing />
      </Router>

  )
}

export default App;
