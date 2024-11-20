/* eslint-disable no-unused-vars */
import React from "react"

export default function Header() {
  return (
    <div className="text-mycream header border-y-4 border-myprimary">
      <div className="container mx-auto max-w-[1000px] px-3 left-0 right-0">
        <div className="flex justify-between py-5 items-center">
          <div
            className="text-gradient font-secondary"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <a href="/">
              <h1 className="bouncy text-4xl">Farid Ramadhan.</h1>
            </a>
          </div>
          <div
            className="flex items-center space-x-3"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
          </div>
        </div>
      </div>
    </div>
  )
}
