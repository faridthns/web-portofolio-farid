/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import 'animate.css';

export default function Socialmedia(props) {
    return(
        
        <div className="group h-[8rem] w-[8rem] [perspective:1000px] animate__fadeInLeftBig" >
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-mygreen border-solid border-4 border-myprimary">
                    <div
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl p-2"
                    >
                        <img src={props.img} alt="github"/>
                    </div>
                </div>

                {/* Back Face */}

                <div className="absolute inset-0 h-full w-full rounded-xl bg-mysecondary border-solid border-4 border-myprimary text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <span className="text-2xl text-plus font-bold mb-4">{props.name}</span>
                        <a href={props.link} className="bg-mygreen rounded-full px-5 inline-block my-2 text-mycream font-bold" target="_blank" rel="noreferrer noopener">To Link...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

