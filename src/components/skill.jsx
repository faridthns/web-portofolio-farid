/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Skill(props) {
  return (
    <div className="w-[25vw] lg:w-[10vw] mx-auto">
      <div className="bg-mysecondary h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group ">
        <img src={props.img} alt={props.lang} />
        <div className="absolute p-5 backdrop-blur-xl bg-mygreen w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear border-solid border-3 border-myprimary">
          <div className="text-center w-full text-myprimary ">
            <div className="bg-myprimary w-full rounded-full px-2 py-2 lg:py-1 inline-block mb-2">
              <h4 className="text-plus text-xs lg:text-base">{props.lang}</h4>
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
