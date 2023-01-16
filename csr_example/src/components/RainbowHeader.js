import React, { useEffect, useState } from 'react'
import {nanoid} from 'nanoid';

/**
 * @author Francisc, vdegenne https://stackoverflow.com/users/383148/francisc
 * @param {int} min inclusive smallest number
 * @param {int} max inclusive largest number
 * @returns 
 */
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const RainbowHeader = ({children}) => {
  
  const [randomUID, setRandomUID] = useState(nanoid());
  useEffect(() => {
    let colorInterval = setInterval(() => {
        document.getElementById(randomUID).style.color = `hsl(${randomIntFromInterval(1, 360)}, 100%, 50%)`
    }, 1000)

    return () => {
        clearInterval(colorInterval);
    }
  }, [])
  return (
    <div className={`rainbow-header`} id={randomUID}>{children}</div>
  )
}

export default RainbowHeader



