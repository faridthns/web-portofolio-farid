// eslint-disable-next-line no-unused-vars
import React from "react"
import Skill from "./skill"

export default function Profile() {
  return (
    <div id="profile" className="section py-0 border-solid border-b-4 border-mysecondary">
      <div className="container mx-auto max-w-[1000px] p-3">
        <div
          className="font-secondary text-center font-bold"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <h4 className="text-secondary mb-3 text-[24px]">
            Skill Yang Saya Kuasai
          </h4>
          <h2 className="text-my-primary font-myprimary max-w-[700px] mx-auto text-base">
            Saya memiliki beberapa skill pemrograman yang telah saya pelajari di
            perkuliahan dan beberapa pengalaman magang saya. Seperti berikut.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          <div
            className="text-center w-full max-w-[400px] my-[50px] mx-auto "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="w-[300px] h-[300px] bg-mygreen pt-[20px] rounded-full overflow-hidden mx-auto  grayscale hover:grayscale-0 transition-all">
              <img src="/images/farid 1x1.png" alt="" />
            </div>
            <h2 className="text-gradient text-[50px]">Farid Ramadhan</h2>
          </div>
          <div
            className="w-[80vw] lg:w-full lg:pt-[50px] lg:ml-5 mx-auto"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 text-center justify-center">
              <Skill lang="HTML5" img="/images/4.png" />
              <Skill lang="CSS3" img="/images/3.png" />
              <Skill lang="BS5" img="/images/2.png" />
              <Skill lang="Tailwind" img="/images/tailwind.png" />
              <Skill lang="JavaScript" img="/images/javascript.png" />
              <Skill lang="React" img="/images/react.png" />
              <Skill lang="Jquery" img="/images/1.png" />
              <Skill lang="PHP" img="/images/php.png" />
              <Skill lang="CI4" img="/images/ci.svg" />
              <Skill lang="MySql" img="/images/mysql.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
