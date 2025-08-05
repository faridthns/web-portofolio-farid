// eslint-disable-next-line no-unused-vars
import React from "react"
import Socialmedia from "./socialmedia";

export default function Contact() {
    return (
        <div id="contact" className="my-[50px] lg:my-[0px] py-3 border-none lg:mb-[0px] lg:border-solid border-b-4 border-myprimary">
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
                <div className="lg:flex gap-4">
                    <div className="kontak py-10 lg:p-10 lg:w-[50%]">
                        <form action="https://formsubmit.co/faridramadhan03@gmail.com" method="POST" className="border-4 border-myprimary bg-mygreen p-10 w-fit mx-auto rounded-md drop-shadow-xl drop-shadow-black-500/50" autoComplete="off">
                            <div className="flex flex-col gap-6 text-myprimary">
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold ">Nama</label>
                                    <input type="text" name="nama" placeholder="Masukkan nama" className="border-2 cursor-input border-myprimary p-2 rounded-md" required/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold">Email</label>
                                    <input type="email" name="email" placeholder="Masukkan email" className="border-2 cursor-input border-myprimary p-2 rounded-md" required/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="pesan" className="font-semibold">Pesan</label>
                                    <textarea name="pesan" id="pesan" placeholder="Pesan" className="border-2 cursor-input w-[60vw] lg:w-80 border-myprimary p-2 rounded-md" required/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="navigation border-2 border-myprimary font-semibold bg-mysecondary text-mycream hover:bg-myprimary hover:text-plus p-3 rounded-lg ww-full cursor-pointer">Kirim pesan</button>
                                </div>
                            </div>
                        </form>
                        <p className="text-[16px] pt-2">*Setiap pesan yang kamu kirim akan langsung masuk ke email saya. Terima kasih sudah membantu saya berkembang.✨</p>
                    </div>
                    <div className="div lg:pt-10">
                        <div 
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <h4 className="text-gradient text-[24px]">
                                Sosial media saya.
                            </h4>
                        </div>
                        <div className="mx-auto flex justify-center object-center pt-4 pb-16  lg:max-w-7xl">
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
            </div>
        </div>
    )
}