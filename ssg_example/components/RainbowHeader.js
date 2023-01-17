import { useEffect, useState, useRef } from 'react';
import {nanoid} from 'nanoid';;

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
  const imageRef = useRef(null)
  const [randomUID, setRandomUID] = useState(nanoid());
  useEffect(() => {
    let colorInterval;
    if (imageRef.current) 
    colorInterval = setInterval(() => {
        imageRef.current.style.color = `hsl(${randomIntFromInterval(1, 360)}, 100%, 50%)`
    }, 1000)

    return () => {
        clearInterval(colorInterval);
    }
  }, [])
  return (
    <div className={`rainbow-header`} id={randomUID} ref={imageRef}>{children}</div>
  )
}

export default RainbowHeader