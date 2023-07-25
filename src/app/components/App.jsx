import style from './app.css';
import {browserRouter,routers,Route} from "react-router-dom"
import  home from "./home"
import about from "./about"
import contact from './contact';
import { user } from './user';


import React from 'react'
import { Content } from 'next/font/google';

export default function app() {
  // <browserRouter>
  // <routers>
  //   <routs path="/" element={<home />}/>
  //   <routs path="/about" element={<about/>}/>
  //   <route path="/contact" element={<Content/>}></route>
  //   <route path="/contact/details" element={<contactdetails/>}/>
  //   <rout path="./contact/:id" element={<user/>} ></rout>
  //   </routers>
  //   </browserRouter>
    
  return (
    <div>app</div>
  )
}


