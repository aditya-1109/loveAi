import React, { useState } from 'react'
import Lottie from 'lottie-react'
import partyPopper from "../assets/partyPopper.json"
import CuteBear from "../assets/Cutebeardancing.json"
import LoveAnim from "../assets/LoveAnimation.json"
import TeddyBear from "../assets/TeddyBear.json"
import { Heart, Sparkles, ArrowDownCircle } from "lucide-react"
import HeartCursor from "./heart"
import Header from './header'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { apiFunction } from '../../api/apiFunction'
import { getMessageApi } from '../../api/apis'

export default function Body() {

  const {id} = useParams()
  const [message, setMessages] = useState(null)
  const [showgif, setShowGif] = useState(false)

  console.log(id)

  const getMessage = async(id)=>{
    const response = await apiFunction("get", [id], null, getMessageApi);
    if(response){
      setMessages(response)
    }
  }

  useEffect(()=>{
    if(id){
      getMessage(id)
    }
  }, [id])
  return (
    <div className="flex flex-col w-full h-full overflow-hidden bg-gradient-to-br from-pink-200 via-red-200 to-purple-200">

      <Header name={message?.name} showgif={showgif} onClick={()=> setShowGif(!showgif)} />

       <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      <svg className="w-full h-full " xmlns="http://www.w3.org/2000/svg">
        
        {/* Petal 1 */}
        <g className="petal-animation" style={{ animationDelay: "0s" }}>
          <path
            d="M12 0 C18 8, 8 16, 12 28 C16 16, 6 8, 12 0"
            fill="rgba(255,120,150,0.8)"
          />
        </g>

        {/* Petal 2 */}
        <g className="petal-animation" style={{ animationDelay: "3s" }}>
          <path
            d="M8 0 C14 6, 4 14, 10 26 C14 14, 0 6, 8 0"
            fill="rgba(255,100,130,0.75)"
          />
        </g>

        {/* Petal 3 */}
        <g className="petal-animation" style={{ animationDelay: "6s" }}>
          <path
            d="M10 0 C16 7, 6 15, 12 26 C16 15, 4 7, 10 0"
            fill="rgba(255,150,170,0.85)"
          />
        </g>

        {/* Petal 4 */}
        <g className="petal-animation" style={{ animationDelay: "1.5s" }}>
          <path
            d="M14 0 C20 8, 10 18, 14 28 C18 18, 8 8, 14 0"
            fill="rgba(255,110,160,0.8)"
          />
        </g>
      </svg>

    </div>

      <div className="relative flex flex-col justify-center items-center w-full h-full px-4">

        {/* BACKGROUND LIGHT SPOT */}
        <div className="absolute w-[500px] h-[500px] bg-pink-400/40 blur-[150px] rounded-full"></div>

        {/* LOTTIES BACKGROUND */}
        <Lottie animationData={partyPopper} loop autoPlay className="absolute w-full h-full opacity-80" />
        <Lottie animationData={TeddyBear} loop autoPlay className="absolute z-30 w-72 bottom-5 opacity-20" />
        <Lottie animationData={LoveAnim} loop autoPlay className="absolute z-30 w-40 top-50 left-5 opacity-20 md:opacity-80" />
        <Lottie animationData={CuteBear} loop autoPlay className="absolute z-30 w-40 top-10 right-10 opacity-20 md:opacity-80" />

        {/* MAIN GLASS CARD */}
        <div className="z-20 bg-white/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,0,100,0.4)] rounded-3xl px-8 py-10 text-center animate-fadeIn scale-95 md:scale-100">

          {/* Heart Halo */}
          <div className="relative flex justify-center">
            <div className="absolute w-40 h-40 bg-pink-300/40 blur-[50px] rounded-full"></div>
            <Heart className="text-pink-600 animate-heartBeat z-20" size={60} />
          </div>

          {/* MAIN MESSAGE */}
          <h1 className="mt-6 text-[38px] md:text-[58px] font-[800] bg-gradient-to-r from-pink-600 via-purple-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,150,0.5)] leading-snug">
            {message?.heading}
          </h1>

          {/* NAME WITH ARROW */}
          <div className="flex flex-col items-center mt-3">
            <ArrowDownCircle className="text-red-500 animate-bounce" size={40} />

            <span className="font-[Great_Vibes] text-[55px] md:text-[70px] text-red-600 drop-shadow-lg">
              {message?.name}
            </span>
          </div>

          {/* ROMANTIC SUBLINE */}
          <p className="mt-4 text-lg md:text-xl text-pink-700 font-semibold flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-500" size={20} />
            Made with love… only for you ❤️
          </p>

          {/* ROMANTIC QUOTE BOX */}
          <div className="mt-6 bg-white/40 backdrop-blur-xl border border-pink-300 rounded-2xl px-6 py-4 text-pink-800 font-medium leading-relaxed shadow-[0_0_20px_rgba(255,150,200,0.4)]">
            {message?.message}
          </div>

          {/* DIVIDER LINE */}
          <div className="mt-8 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

          {/* BOTTOM TEXT */}
          <p className="mt-6 text-lg text-purple-700 font-semibold">
            You are my  
            <span className="text-red-600 font-extrabold"> Forever </span>  
            and  
            <span className="text-red-600 font-extrabold"> Always ❤️</span>
          </p>
        </div>

        {/* WAVE SHAPE BOTTOM */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path 
            fill="#ff8ac6" 
            fillOpacity="0.4" 
            d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,138.7C672,117,768,107,864,117.3C960,128,1056,160,1152,149.3C1248,139,1344,85,1392,58.7L1440,32V320H0Z">
          </path>
        </svg>

        <HeartCursor />
      </div>

    
    </div>
  )
}
