import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='p-5  m-2 bg-gray-300 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button