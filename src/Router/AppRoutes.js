import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComp from './HomeComp'
import AboutComp from './AboutComp'
import ProjectsComp from './ProjectsComp'
import ContactComp from './ContactComp'
import Navbar from '../components/Navbar'

function AppRoutes() {
  return (
<>

<Navbar/>
    <Routes>

<Route path='/' element={<HomeComp/>}/>
<Route path='/home' element={<HomeComp/>}/>
<Route path='/About' element={<AboutComp/>}/>
<Route path='/Projects' element={<ProjectsComp/>}/>
<Route path='/Contact' element={<ContactComp/>}/>

    </Routes>
</>
  )
}

export default AppRoutes