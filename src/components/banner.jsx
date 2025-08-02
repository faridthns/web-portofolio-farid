// eslint-disable-next-line no-unused-vars
import React from "react"
import { TypeAnimation } from "react-type-animation"
// import { ModelViewerElement } from "@google/model-viewer"
// import { SimpleViewer } from 'threedviewer';

export default function Banner() {
  return (
    <div className="border-solid border-b-4 border-mysecondary">
      <div
        id="home"
        className="py-0 px-4 section container mx-auto max-w-[1000px] items-center text-black"
      >
        {/* <div style={{ width: '100vw', height: '100vh' }}>
          <SimpleViewer object={'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb'} />
        </div> */}
        {/* <div className="anim">
         <ModelViewerElement src="https://model-viewer.dev/assets/gltf/Shuttle.glb" style="width: 300px; height: 300px;" camera-controls auto-rotate auto-rotate-delay="0" rotation-per-second="180deg" autoplay />
        </div> */}
        <div 
          className="w-full bg-mygreen2 border-4 border-myprimary p-6 rounded-3xl overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src="/images/rocket-space.png" alt="rocket" className="absolute max-w-24 -z-50 left-0 top-0" />
          <div className="block text-center font-secondary text-[30px]">
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
                className="rokkit font-bold text-[#1E3E62] ml-3"
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            className="max-w-[90vw] font-bold text-center text-base mx-auto mt-5"
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
