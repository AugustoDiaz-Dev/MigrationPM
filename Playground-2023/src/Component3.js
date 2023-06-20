import React, {useState, useEffect} from 'react'

const Component3 = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setwindowWidth(windowWidth.innerWidth)
    }

    useEffect(()=> { 
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


  return (
    <div>
        {windowWidth}
    </div>
  )
}

export default Component3