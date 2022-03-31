import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Login from './components/Login'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import Hello from "./Hello.bs"

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
    })
  }

  useEffect(() => {
    if (localStorage['isAuth'])
      setIsAuth(true)
  }, [])

  return (
    <div className="App">
      <Header isAuth={isAuth} signUserOut={signUserOut} />
      <Hello />
      {isAuth ? <Main /> : <Login setIsAuth={setIsAuth}/>}
      <Footer />
    </div>
  );
}

export default App;
