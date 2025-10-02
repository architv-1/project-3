import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <p className='absolute  lg:w-[25vw] w-80 lg:right-20 right-0 lg:bottom-35 bottom-[50vw] lg:text-xl text-xs font-[font1] lg:leading-relaxed leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <Link to='/project' className='text-[5vw] hover:text-[#d3fd50] hover:border-[#d3fd50]  lg:border-3 border-2 border-white rounded-full uppercase leading-[7vw] lg:px-8 px-9 pt-1 lg:mb-2 mb-4 '>Projects</Link>
      <Link to='/agence' className='text-[5vw] hover:text-[#d3fd50] hover:border-[#d3fd50]  lg:border-3 border-2 border-white rounded-full uppercase leading-[7vw] lg:px-8 px-9  pt-1 lg:mb-2 mb-4 -py-3'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
