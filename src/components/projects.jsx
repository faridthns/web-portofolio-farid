/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Projects(props) {

  return (
    <div className="w-full" data-aos="flip-left" data-aos-duration="1000">
      <div className="bg-mysecondary border-solid border-4 border-myprimary h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group ">
        <img src={props.img} alt="" />
        <div className="absolute p-5 bg-mygreen w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
          <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
            <div className="bg-myprimary rounded-full px-5 inline-block mb-2 ">
              <h4 className="text-plus">{props.type}</h4>
            </div>
            <p className="text-sm text-myprimary">{props.desc}</p>
            <a
              href={props.link}
              className="bg-myprimary rounded-full px-5 inline-block my-2 text-plus font-bold"
              target="_blank"
              rel="noreferrer"
            >
              To Link...
            </a>
            <br></br>
            <span className="text-sm text-myprimary">Tech : {props.tech}</span>
              {/* {lang.map((name, index) => (
              <img key={index} src={`/images/${name}`} alt={name} width="50"/>
              <img key={index} src={`/images/${name}`} alt={name} width="50"/>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}
