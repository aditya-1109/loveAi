
import React, { useEffect, useRef, useState } from 'react'
import { Heart } from "lucide-react"
import giftbox from "../assets/Giftbox.json"
import Lottie from 'lottie-react';
import chocolate from "../assets/Chocolate.json"


export default function Header({ name, showgif, onClick }) {

  const [showGift, setShowGift] = useState(false);
  const [showChoco, setShowChoco] = useState(false)
  const [showopengif, setShowOpengif] = useState(false);
  const gifRef = useRef()


  useEffect(() => {
    if (gifRef.current) {
      gifRef.current.setSpeed(-1);
      gifRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (showGift) {
      setTimeout(() => {

        setShowGift(false);
        setShowOpengif(true)
      }, [3000])
    }
  }, [showGift])


  useEffect(() => {
    if (showopengif) {
      setTimeout(() => {

        setShowOpengif(false);
        setShowChoco(true)
      }, [2500])
    }
  }, [showopengif])




  return (
    <div className='w-full flex flex-row justify-between items-center p-2 px-4 bg-gradient-to-r from-red-400 via-white to-red-400'>
      <div className='rounded-full p-2 flex items-center justify-center flex-row bg-gradient-to-t from-red-200 via-white to-red-200'>

        <h1 className='font-bold flex flex-row justify-center items-center text-red-950 text-2xl'><span><Heart color='red' className='up-n-down-animation' /></span>{name}</h1>


      </div>

      {showopengif &&
        <Lottie
          lottieRef={gifRef}
          animationData={giftbox}
          loop={false}
          autoplay={false}
          className="fixed w-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
          onDOMLoaded={() => {
            const inst = gifRef.current;
            if (inst) {
              const totalFrames = inst.getDuration(true);
              inst.setSpeed(-1);
              inst.goToAndPlay(totalFrames, true);
            }
          }}
        />
      }

      {showChoco &&
        <Lottie
          animationData={chocolate}
          loop={false}
          autoPlay={true}
          className="fixed w-80 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

        />
      }

      {
        showGift ? (
          <img
            src="/image.png"
            className="moveGift-animation z-40 fixed w-10 right-10"
            alt="gift"
          />
        ) : showgif ? (
          <img
            src="/openBox.png"
            className="w-12"
            alt="open box"
          />
        ) : (
          <img
            onClick={() => {
              setShowGift(true);
              onClick();
            }}
            src="/image.png"
            className="gift-animation w-10"
            alt="gift"
          />
        )
      }

    </div>
  )
}
