// eslint-disable-next-line no-unused-vars
import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div className="border-solid border-b-4 border-mysecondary">
      <div
        id="home"
        className="section container mx-auto max-w-[1000px] px-3 items-center text-black"
      >
        <div className="w-full">
          <div
            className="block text-center font-secondary text-[30px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Hello, I am Farid Ramadhan
            <div>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="ml-3 text-gradient"
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            className="max-w-[90vw] text-center text-base mx-auto mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Halo semua! Saya seorang web developer yang hobi ngulik teknologi terbaru. Selalu berusaha bikin website yang gak cuma keren, tapi juga mudah digunakan. Punya pengalaman di beberapa proyek dan siap buat kerjasama bareng kamu!
            <br /> Yuk, kita terhubung.
          </div>
        </div>
      </div>
    </div>
  )
}
