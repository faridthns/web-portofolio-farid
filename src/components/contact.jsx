// eslint-disable-next-line no-unused-vars
import React from "react"
import Socialmedia from "./socialmedia";

export default function Contact() {
    return (
        <div id="contact" className="mt-[100px] lg:mt-[0px] py-3 border-none lg:mb-[0px] lg:border-solid border-b-4 border-myprimary">
            <div className="container mx-auto max-w-[1000px] px-3 py-[50px]">
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                    <h4 className="text-secondary text-[24px]">
                        Let&apos;s Connect 
                    </h4>
                    <div className="text-gradient text-[24px]">
                    Punya ide projek baru, atau butuh Web Developer di tim kamu. Jangan ragu untuk menghubungiku melalui kontak di bawah ini.
                    </div>
                </div>
                <div className="mx-auto flex justify-center object-center px-4 py-16  lg:max-w-7xl">
                    <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                        <div className="mx-auto flex justify-center grid gap-12 space-y-0 sm:gap-16 grid-cols-2 lg:grid-cols-3">
                            {/* social */}
                            <Socialmedia
                            img="/images/github.png"
                            name="Github"
                            link="https://github.com/faridthns"
                            />
                            <Socialmedia
                            img="/images/linkedin.png"
                            name="Linkedin"
                            link="https://www.linkedin.com/in/faridramadhan03/"
                            />
                            <Socialmedia
                            img="/images/mail.png"
                            name="Gmail"
                            link="mailto:faridramadhan03@gmail.com"
                            />
                            {/* social end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}