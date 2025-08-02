// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState } from 'react';
import Projects from "./projects"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      type: 'Website NFT',
      desc: 'Seikeleton adalah sebuah aplikasi web berbasis React dan Vite yang terintegrasi dengan smart contract jaringan SEI. Platform ini menyediakan fitur utama seperti minting NFT, serta menampilkan informasi penting secara real-time seperti jumlah supply yang telah dicetak dan harga minting per NFT. Antarmuka pengguna dirancang dengan UI modern dan responsif, memudahkan interaksi pengguna dengan blockchain melalui wallet.',
      img: '/images/seikeleton.png',
      link: 'https://seikeleton.vercel.app/',
      tech: 'React JS, Vite JS',
    },
    {
      type: 'Guest Registration',
      desc: 'Aplikasi ini merupakan sistem informasi berbasis web yang dikembangkan untuk PT Riscon Victory. Sistem ini menyediakan fitur manajemen buku tamu dan presensi karyawan, dengan dukungan teknologi seperti pengambilan gambar melalui kamera dan pelacakan lokasi untuk validasi kehadiran. Selain itu, tersedia juga opsi input presensi manual bagi admin dan fitur dashboard admin untuk melakukan pengelolaan data, seperti daftar tamu, riwayat presensi, dan data karyawan.',
      img: '/images/tamu.riscon.png',
      link: 'https://tamu.riscongroup.id/',
      tech: 'CodeIgniter, Javascript, Bootstrap, MySql',
    },
    {
      type: 'E-Commerce',
      desc: 'Website penjualan ini dikembangkan untuk CV Gins ADV sebagai solusi digitalisasi proses pemesanan produk. Sistem ini memungkinkan pelanggan melakukan pemesanan produk melalui fitur keranjang belanja, sementara admin dapat mengelola data produk, pesanan, dan akun pengguna melalui dashboard yang terpisah. Aplikasi ini dibangun dengan desain antarmuka yang responsif untuk memastikan pengalaman pengguna yang optimal di berbagai perangkat. Proyek ini mencerminkan implementasi konsep CRUD, autentikasi, serta manajemen transaksi dalam sistem e-commerce sederhana.',
      img: '/images/ginsadv.jpg',
      link: 'https://ginsadv.id/',
      tech: 'CodeIgniter, Bootstrap, Javascript, JQuery, MySql',
    },
    {
      type: 'Weather App',
      desc: 'CuacaKu adalah website yang menyediakan informasi perkiraan cuaca terkini untuk berbagai lokasi di seluruh dunia. Dengan antarmuka yang ramah pengguna dan desain responsif, website ini memungkinkan pengguna untuk dengan mudah mendapatkan data cuaca yang akurat dan relevan dengan cara melakukan pencarian berdasarkan nama kota atau nama negara.',
      img: '/images/webcuaca.png',
      link: 'https://webcuaca.netlify.app/',
      tech: 'React JS',
    },
  ];

  const handleNext = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goToIndex = (i) => {
    setIndex(i);
  };

  return (
    <div id="portofolio" className="section  lg:mb-[0px] border-solid border-b-4 border-myprimary">
      <div className="container mx-auto max-w-[1000px] px-3 pt-3 pb-[20px]">
        <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
          <div
            className="order-2 lg:order-1 mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-secondary text-[24px]">
              Projek yang telah saya selesikan
            </h4>
            <div className="text-gradient max-w-[700px] mx-auto text-[24px]">
              Dibawah ini adalah beberapa projek yang telah saya selesaikan.
            </div>
          </div>
          <div
            className="order-1 lg:order-2 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              04
            </h2>
            <h2>Completed Projects</h2>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto">
          {/* Tombol Navigasi */}
          <div className="flex place-items-center gap-4 mb-4 h-80">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`navigation px-4 py-2 rounded ${index === 0 ? 'cursor-not-allowed' : 'bg-mygreen hover:bg-mygreen2'} h-fit`}
            >
              <IoIosArrowBack className={`${index === 0 ? 'text-gray-500' : 'text-mycream'}`}/>
            </button>
            {/* Tampilan Project */}
            <div className="transition duration-300 ease-in-out">
              <Projects
                type={projects[index].type}
                desc={projects[index].desc}
                img={projects[index].img}
                link={projects[index].link}
                tech={projects[index].tech}
              />
            </div>
            <button
              onClick={handleNext}
              disabled={index === projects.length - 1}
              className={`navigation px-4 py-2 rounded ${index === projects.length - 1 ? 'cursor-not-allowed' : 'bg-mygreen hover:bg-mygreen2'} h-fit`}
            >
              <IoIosArrowForward className={`${index === projects.length - 1 ? 'text-gray-500' : 'text-mycream'}`}/>
            </button>
          </div>
          {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`navigation w-6 h-6 rounded-full ${
              i === index ? 'bg-plus' : 'bg-mygreen'
            } hover:bg-mysecondary transition`}
          ></button>
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}
