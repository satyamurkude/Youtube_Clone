import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isSideBarOpen=useSelector((store)=>store.app.isSideBarOpen)
  return (
    // Early Return
      !isSideBarOpen ? null :
    <div className='p-4 shadow-lg w-48'>
     
    <ul>
       <Link to="/"> Home </Link> 
        <li> Menu </li>
        <li> Gaming </li>
        <li> Movies </li>
        <li> Coding </li>

    </ul>
    <h1 className='pt-5 font-bold'>Subscriptions</h1>
    <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
        <li> Movies </li>
        <li> Coding </li>

    </ul>
    <h1 className='pt-5 font-bold'>Subscriptions</h1>
    <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
        <li> Movies </li>
        <li> Coding </li>

    </ul>

    </div>
  )
}

export default SideBar