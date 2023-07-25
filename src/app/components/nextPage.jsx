import React from 'react'
import { NextPage } from './nextapp.css'
import { createBrowserRouter,Routes,Route, RouterProvider } from 'react-router-dom'
import home from './home'
import contact from './contact'
import about from './about'
import contactDetails from './contactDetails'
import project from './project'
import header from './header'
import style from './stylecomponents'

const router = createBrowserRouter([
  {
    path:'/',
    element:<home/>
  },

  {
    path:'about',
    element:<about/>
  },

  {
    path:'contact',
    element:<contact/>
  },

{
  path:'project',
  element:<project/>
}

])

export default function nextPage() {
  return (
    <appContainer>
        <RouterProvider router={router}/>
        <header/>
    </appContainer>
  )
}

const appContainer = style.main`
width:100vw;
overflow-x:hidding;
`

