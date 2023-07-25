import style from './styled components'
 import React from 'react'

const { useState } = require("react")

// import React, { useEffect, useState } from 'react'
// import { CookieListItem } from 'next/dist/compiled/@edge-runtime/cookies'


// const header = () => {

//     const[widndwowith,set widndwowith]=useState(window.innerWidth)
//    const [menuClick , setMenuClick]= useState
//    (false)
//   return 
//   useEffect(()=>{

//     console.log('use effect colling')
//     window.addEventListener('resize'()=>{
//         setWindowWidth(window.innerWidth)

//     })
//     rreturn ()=>{
//         console,log['cleanaup function']
//     }
//     console.log('use effect calling..')
//   });
// //     <header className='header_headercontainer'>

//         <h1>aku <span>Dev</span></h1>
//         <nav>
//             <img className="hedermanu__closer"src={menu} alt="paka"  style={[
//                 width:"30px",
//                 crusor:"pointer",

//             ]}/>

//             onClick={()=>{
//                 setMenuClick(true)
//             }}

//             <div className='header___menuCloser'>
//                 <img src="pp.svg" alt="pakaya" className="" />
//             </div>
//             <ul style={[
//                 right:${menuClick?'-20px':'-250px'};

//             ]}>
//                 <div className='header__Menu'></div>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Project</li>
//             </ul>
//         </nav>
    
//     </header>
//   )
// }

// <h1>{widndwowith}</h1>
// export default header


const header=()=>{
    const [menuClick , setManuClick] = useState(false);
    return 
    <headerContainer>
        <headerLeft>
            <h1>akm<span>dev</span></h1>
            <img src="{menu}" alt="menu"/>
            <ul>
                <li>
                    <link to='/'>home</link>
                </li>
                <li><link to='/'>about</link></li>
                <li><link to='/'>contact</link></li>
                <li><link to='/'>projectg</link></li>
            </ul>
        </headerLeft>
    </headerContainer>

}

export default Headers;

const headerContainer = style.Header`
position:fixed;
top:0;
left:0;
z-index:100;  
display: flex;
alighn-item:center 
justify-contain: 

`

const headerLeft = style.div`
    
`

const headerRight =style.nav`
    position:realtive;

    img{
        width:27px;
        obeject-fit:contain;
    }
`