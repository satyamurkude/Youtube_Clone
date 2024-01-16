import React, { useEffect, useState } from 'react';
import { toggleFunction } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
const Head = () => {
const [searchQuery,setSearchQuery]=useState("")

useEffect(()=>{const timer=setTimeout(()=>getSearchSuggestions(),200);
return ()=>{
   clearTimeout(timer)
}},[searchQuery])
const getSearchSuggestions=async()=>{
  console.log("Api call- "+searchQuery)
const data=await fetch(YOUTUBE_SEARCH_API + searchQuery)
const json=await data.json();

}

  const dispatch=useDispatch();
  const toggleHandler=()=>{
    dispatch(toggleFunction())
  }
  return (
    <div className="flex md:grid-flow-col mt-1 md:grid justify-between items-center border-b-2 shadow-sm  sticky top-0 bg-white md:shadow-none md:border-none">
       <div className="flex items-center md:col-span-3">
        <img onClick={toggleHandler}
          className='h-8 m-1 cursor-pointer p-1'
          alt='hamburger menu'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAD+/v4BAQH7+/tiYmINDQ21tbUlJSU/Pz/S0tLKyspXV1dMTEwFBQX39/e8vLzu7u7g4OAsLCzo6OjDw8N+fn5xcXGYmJiHh4cUFBStra1FRUU4ODhRUVGNjY0eHh6ioqLSOa/LAAAEqklEQVR4nO2dCXPiOBCFJVnAYoPxgYFw5Pj/f3LVLTtjcmy5nWTUM/s+UlRIYlc/t+RDeuoYAwAAAAAAAAAAAAAAmI4zLnyljmIMB+Pc8J1oU+fc3YfksJD+W/mBmLHRD+LMoGZOZnx4vX5Ij/e9Eme8VI2qrIzg7Ig38qbuHjZbRWwOVW3MqMFMkcEvs6sez6VVRXnernayxDhumvXT8/2esre7TvKD82Ev6zIhj65+oCPxbtcKODaS1ITeYnYvQUpAnZoQ0NNOkBhSU7QhLSrFZHZZSbQ4tzsFLSrFUEgPtZl8UxMS0zzyVgrFhENsb/l0MeGv8jJslb0/taQntBZrC0k7M0XqmD8nHGO78tO1ONN9cMLXATUYexGJKXSLqUT3M3mrVkx4LXOBlnD9P7AYVYKGYEq7aERiTLWkCw3nNL5rgIIJWuxFdDvjzP5IFxlNUDzhghGufJLEUGa8K7Y27iNm5rXR3b+9//Rfv//SJr2YzF47J3iejw//3dpGIZoIId1WXjI24eJfN4tvb/TfwFZwJuubWUxkfri2/yiivR6r12M9vZkNN3F1oYp6CHAGCgdo5oeUaIDsE0Lr+tLR1TWk+WVSp2MEh5P6eHwT7i9rJn9PZgAAAAAAAAAA/PHwhO5oMCE1bhgtmhGNM3Jb109ChrPhwIqPLg+6aTLP/fIByluKE9m6fhtRlnQrT1qaaqWIqnHzm/9q056Xiji325c4Sykmv6aeWPqIWydz9fJsjqtuNOeuZJ55IITTXmSTTQFfXHnuPHX0bwkR3arpZhNWYxqeOtfn0LJZaTcSXyM1s5XV6dHKhD4gUsOeBpXNjPxmktQ4NgKVg6lBCX0kQQ0ZgSRiCk2WmUgfTSa0aKk2z1lpp9Fsa8zktsb8bJUtA/iF2HBKVuDUQX8MGc5uEicgu+d19hkyAtunWpCZQL4e70KDMHa+sUf7uRO1svCEejnzYoDh7J4eSkrGbf8kWdjAz8v1kx1nJL0TkDJDXkArW0ATn/7rl9bGZSfsWE9N2feX59BhZMu0qJ0Zny+el6k13LM8bzpPwUky4+Pzj89Pi40iFqecrpZectPstXuzdEcHAAAAAAAAAAAAAMCfgralhF+Kh4bPRQOhP453fYWvWRYt3swT3x6YHIqBDEqzYnEuDlLrYed7OfLMhA32xctxoYjjqdvPyUtgt1JYqmF7qZ2sKCCzpzJ6fUGQ1BIIDoXK6DUy9yx1l/2BTTcqdDDZ8H5shGJMfVqqLKNHM7R9rbbJWkyxtkpmZu8hh1Yr8gE4Q2X0ylJVM4vw7PmDxKHhHHlnQscvdfT9MaMyelMzky+596tLTGxntpM6AbnAoUYxQr+ZeXUCKhRDIUnK6BnOTOqwP4RLaYk8ml5vGT2qVGpLkROQyugpRVqtje59qtRBfwadzETm2VhGT1uJw2gFLLm+obAoYL6x6qoCxnPZuhP5zfiJrtikTsUb+hvFayWqPu94FaFpDq0y75y1y/aYy9acuX4ApK4Om7Umro+HVS38rxhxmRY9COyaXBVN/ebfYkzKTL/MVLDRb0NpWAAAAAAAAAAAAAAAAAAAAAAAAAAA/w/+BR+rd/lzu/fIAAAAAElFTkSuQmCC'
        />
        <a href="/" className='flex items-center'>
        <img
                className="w-10 cursor-pointer"
                src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
                alt="Youtube Logo"
              />
               <b className="cursor-pointer text-lg">U-Tube</b>
        </a>
      </div>
      
      <div className='col-span-10 flex items-start px-10 flex-col'>
  <div className='flex items-center w-[70%]'>
    <input
      className='flex items-center border w-full border-black placeholder:font-bold  px-5 py-2 rounded-l-full'
      placeholder='Search text'
      type='text'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />

    <button className='border border-black font-bold px-5 py-2 bg-slate-300 rounded-r-full'>
      🔍
    </button>
  </div>

  <div className=' ml-4 w-[39%] fixed mt-10 bg-white border z-90 py-2 px-5 rounded-md shadow-xl border-black'>
    <ul className='px-5 py-2'>
      <li>   🔍 Iphone</li>
      <li>    🔍 Iphone</li> 
      <li>   🔍 Iphone</li>
      <li>   🔍 Iphone</li> 
      <li>   🔍 Iphone</li>
      <li>   🔍 Iphone</li> 
   
    </ul>
  </div>
</div>

        <button>
          <img
            className='h-8 col-span-1 '
            alt='user logo'
            src="data:image/png;base64,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"/>
</button>
</div>

  )
}


export default Head;
       