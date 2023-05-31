"use client"
import React, { useState } from 'react'

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from './Icon'


export default function Btn() {
    const [quan,setquan]=useState(1)
    function inc(){
        setquan(quan+1)
    }function dec(){
        if(quan!==1){

            setquan(quan-1)
        }
    }
  return (
    <>
    <div className='flex'>
        quantity
        <AiOutlineMinusCircle onClick={dec} />
        {quan}
        <AiOutlinePlusCircle onClick={inc} />

        
    </div>
    </>
  )
}
