/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Skill(props) {
  return (
    <div className="w-[25vw] lg:w-[10vw] flex flex-col justify-center drop-shadow-xl drop-shadow-black-500/50">
      <div className="bg-mysecondary justify-center items-center flex rounded-lg overflow-hidden relative p-3 lg:p-5 group w-[20vw] h-[20vw] lg:w-[10vw] lg:h-[10vw] mx-auto">
        <img src={props.img} alt={props.lang}/>
      </div>
      <h4 className="text-mysecondary text-xs lg:text-base">{props.lang}</h4>
    </div>
  )
}
