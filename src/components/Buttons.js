import React from 'react'

export const Buttons = ({buttonClick, submitCalc, clearNumber}) => {
  return (
    <div className = 'button-grid'>
      <button onClick = {clearNumber}>DEL</button>
        {"/*-+1234567890.".split("").map(number => (
            <button value = {number} onClick = {buttonClick} key = {number}>
                {number}
            </button>
        ))
    }
      <button className='wide-button' onClick = {submitCalc}>=</button>
    </div>
  )
}

export default Buttons;