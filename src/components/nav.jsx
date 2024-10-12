/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-scroll"
import { HiMiniHome, HiMiniUser, HiCodeBracket,  } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";

export default function Nav() {
  return (
    <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
      <div className="flex justify-between mx-auto bg-mysecondary text-white p-2 rounded-full border-myprimary border-solid border-[3px] max-w-[60vw] lg:flex-col">
        <Link
          to="home"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center navigation"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <HiMiniHome />
        </Link>
        <Link
          to="profile"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center navigation"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <HiMiniUser />
        </Link>
        <Link
          to="portofolio"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center navigation"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <HiCodeBracket />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center navigation"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <AiFillMessage />
        </Link>
      </div>
    </div>
  )
}
