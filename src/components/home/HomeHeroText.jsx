import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className=" text-center font-[font1] pt-1 mt-[100vw] lg:mt-0">
            <div className="lg:text-[9vw] text-[11vw] flex items-center justify-center uppercase lg:leading-[9vw] leading-[10vw]">L'étincelle </div>
            <div className="lg:text-[9vw] text-[11vw] flex items-center justify-center uppercase lg:leading-[9vw] leading-[10vw]">qui 
                <div className="h-[7vw] w-[15.5vw] -mt-5 rounded-full overflow-hidden"><Video/>
                </div>
                 génère</div>
            <div className="lg:text-[9vw] text-[11vw] flex items-center justify-center uppercase lg:leading-[9vw] leading-[10vw]">la créativité</div>
        </div>
    )
}

export default HomeHeroText
