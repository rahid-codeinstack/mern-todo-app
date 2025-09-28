import { BrowserRouter , Routes , Route  } from "react-router-dom"
import React from "react"
import "./App.css"
import SignUp from "./pages/SignUp/signUp"
import Signin from "./pages/SignIn/Signin"
import Filter from "./pages/Filter/Filter"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header.jsx"




function App() {
  return (
        <BrowserRouter>
        <Header/>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/sign-in" element={<Signin/>} />
           <Route path="/sign-up" element={<SignUp/>} />
           <Route path="/filter" element={<Filter/>} />

        </Routes>
        </BrowserRouter>
  )
}

export default App
