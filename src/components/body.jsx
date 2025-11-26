import React from 'react'
import Lottie from 'lottie-react'
import partyPopper from "../assets/partyPopper.json"
import CuteBear from "../assets/Cutebeardancing.json"
import LoveAnim from "../assets/LoveAnimation.json"
import TeddyBear from "../assets/TeddyBear.json"
import { Star } from 'lucide-react'


export default function Body() {

  
  return (
    <div className='relative flex justify-center items-center w-full h-full'>
      <Lottie
        animationData={partyPopper}
        loop={true}
        autoPlay={true}
        className='absolute'
      />

      <Lottie
        animationData={TeddyBear}
        loop={true}
        autoPlay={true}
        className='absolute w-50 h-50 bottom-5 opacity-30'
      />

      <Lottie
        animationData={LoveAnim}
        loop={true}
        autoPlay={true}
        className='absolute w-30 h-30 top-5 left-5'
      />

      <Lottie
        animationData={CuteBear}
        loop={true}
        autoPlay={true}
        className='absolute w-20 h-20 top-2 right-2'
      />

      <h1
        className="
    scaleUp-animation
    text-center
    flex flex-wrap justify-center items-center
    text-[45px] md:text-[60px]
    font-[900]
    z-20
    bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400
    bg-clip-text text-transparent
    drop-shadow-[0_0_15px_rgba(255,0,150,0.6)]
    font-[Poppins]
  "
      >
        <Star color='red' scale={12} /> Happy 3 Year Anniversary <span class="font-[Great_Vibes] ml-3">Sakku</span> 
      </h1>
    </div>
  )
}
