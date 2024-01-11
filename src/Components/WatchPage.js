import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
const WatchPage = () => {
const[searchParams]=useSearchParams();


    const dispatch=useDispatch()
    useEffect(()=>{dispatch(closeMenu())},[])

  return (

    <div className='px-4'>
     <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1&mute=0"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full"> 
        </div>
        </div>
  </div>
  
  )
}   

export default WatchPage