// import React from 'react'
import { useEffect, useState } from "react";
import{ userParam} from "react-router-dom"

export const user = () => {
    const [data , setdata] =useState({})
    const {id} =useParams();

    useEffect(()=>{
        conts fetData = async ()=>{
            const res =  await fetch("")
            const data= await res json
        }
        if(data){
            setdata{data}

        }

        getData()

    },[id])
  return (
    <div>user</div>
  )
}
