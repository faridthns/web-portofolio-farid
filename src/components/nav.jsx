/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi"

export default function Nav() {
  return (
    <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
      <div className="flex justify-between mx-auto bg-mysecondary text-white p-2 rounded-full border-myprimary border-solid border-[3px] max-w-[200px] lg:flex-col">
        <Link
          to="home"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="profile"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiUser />
        </Link>
        <Link
          to="portofolio"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  )
}
