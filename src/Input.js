import React from 'react'

const Input = ({color, setColor }) => {
  return (
    <form className='input' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='Search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Input Color'
            value={color}
            onChange={(e)=> {
              setColor(e.target.value)
            }}
        />

    </form>
  )
}

export default Input