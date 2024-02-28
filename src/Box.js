import React from 'react'
const Box = ({color, hexValue }) => {
  return (
  
      <div className="box-content"
      style={{backgroundColor: color}}
      >
        {!color ? <p>Please input color</p> : color}
        <p>{hexValue?hexValue:null}</p>
      </div>
  )
}

export default Box