// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Footer() {
  const tahunSekarang = new Date().getFullYear()

  return (
    <div className="hidden lg:block text-center p-5 bg-mysecondary text-mycream">
      &copy; {tahunSekarang} By Farid Ramadhan{" "}
      <p>Portofolio ini saya buat dengan React JS dan Tailwind CSS</p>
    </div>
  )
}
