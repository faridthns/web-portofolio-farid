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
            className="max-w-[750px] text-center text-base mx-auto mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Selamat datang di portofolio saya! Saya adalah seorang Web Developer dengan fokus utama pada pengembangan aplikasi berbasis web. Dengan pengetahuan yang saya dapat dari perkuliahan dan beberapa pengalaman di industri ini, saya berkomitmen untuk memberikan solusi teknologi yang inovatif dan dapat diandalkan. Selain itu, saya juga tertarik dalam eksplorasi teknologi baru dan selalu siap untuk tantangan baru dalam pengembangan perangkat lunak. Selamat menikmati portofolio saya di sini dan jangan ragu untuk menghubungi saya untuk proyek atau peluang kerja!
            <br /> Terima kasih.
          </div>
        </div>
      </div>
    </div>
  )
}
