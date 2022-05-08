import React, {useEffect, useState} from 'react';
import LoginPage from './screens/login';
import { auth } from './screens/firebase';
import NavBar from './navBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routing from './router';

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
    <>
      {currentUser ? <HomeComponent /> : <LoginPage />}
    </>
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
