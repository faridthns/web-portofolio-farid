/* eslint-disable no-unused-vars */
import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Header() {
  return (
    <div className="text-mycream bg-mysecondary">
      <div className="container mx-auto max-w-[1000px] px-3 left-0 right-0">
        <div className="flex justify-between py-5 items-center">
          <div
            className="text-gradient font-secondary"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <a href="/">
              <h1 className="text-[30px] leading-none font-bold">FARID</h1>
              <h4 className="font-normal leading-none">RAMADHAN</h4>
            </a>
          </div>
          <div
            className="flex items-center space-x-3"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <a
              href="https://github.com/faridthns"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/farid-ramadhan-151161268/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
