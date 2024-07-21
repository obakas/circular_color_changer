import React from 'react'

export const Circle = ({ colorValue, hexValue, isDarkText}) => {
  return (
        <section 
            className="circle" 
            style={{ 
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF" }}>
            <p>{colorValue ? colorValue : "Empty Value"}</p> 
            <br/>
            <p>{hexValue ? hexValue : null}</p> 
        </section>
  )
}

Circle.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Circle