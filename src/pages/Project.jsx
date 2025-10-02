import React from 'react'
import ProjectCards from '../components/projects/ProjectCards'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useEffect } from 'react'

const Project = () => {
   const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

 
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })
  return (
    <div className='lg:p-3 p-2'>
     
      <div className='pt-[39vh]'>
        <h2 className='text-black font-[font2] lg:text-[14.5vw] text-[17vw] uppercase '>Projects</h2>
      </div>

      <div className="lg:-mt-20 -mt-[6vw] lol">
        {
          projects.map(function(elem,idx){
            return  <div key={idx} className="hero w-full lg:h-[35vw] h-[30vw] flex lg:flex-row flex-col lg:gap-3 gap-3 mb-4">
            <ProjectCards image1={elem.image1} image2={elem.image2}/>
            </div>
          })
        }
        
      </div>
    </div>
  )
}

export default Project
