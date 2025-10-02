import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()
const NavContext = ({children}) => {
  const [navColor , steNavColor] = useState('white')
    const [navOpen,setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function(){
      if(locate == '/project' || locate == '/agence'){
        steNavColor('black')
      }
      else{
         steNavColor('white')
      }
    },[locate])
  return (
    <div>
      <NavbarContext.Provider value={[navOpen,setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor,steNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
