import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Jobs from './components/Jobs/Jobs'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Intern from './components/Intern/Intern'
import Courses from './components/Courses/Courses'
import Signup from './components/Signup/Signup'
import Login from './components/Signup/Login'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/internships' element={<Intern/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
