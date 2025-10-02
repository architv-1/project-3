import React from 'react'

const ProjectCards = (props) => {
  return (
    <>
    
      
          <div className="group lg:w-1/2 h-full transition-all  hover:rounded-[50px] overflow-hidden relative">
          <img className=' h-full w-full object-cover ' src={props.image1} alt="" />
          <div className="opacity-0 transition-all  group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/10" >
            <h2 className='text-[4vw] text-center border-2 border-white rounded-full uppercase leading-[4vw] w-[33vw] '>
    voir le project
            </h2>
          </div>
          </div>
          <div className="group lg:w-1/2 h-full transition-all  hover:rounded-[50px] overflow-hidden relative">
          <img className=' h-full w-full object-cover ' src={props.image2} alt="" />
          <div className="opacity-0 transition-all  group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/10" >
            <h2 className='text-[4vw] text-center border-2 border-white rounded-full uppercase leading-[4vw] w-[33vw] '>
    voir le project
            </h2>
          </div>
          </div>
        
    </>
    
  )
}

export default ProjectCards
