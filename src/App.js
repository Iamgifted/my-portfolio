import React from "react";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

function App() {
  const projects = [
    {
      title: "MK Design",
      desc: "A design for a furniture brand",
      img: "/images/mk-design.jpg.jpg",
    },
    {
      title: "Florida Hair Beauty",
      desc: "A banner design for a hair stylist",
      img: "/images/florida-hair.jpg.jpeg",
    },
    {
      title: "Church Valentine Program",
      desc: "A design for a church valentine program",
      img: "/images/valentine-program.jpg.jpg",
    },
    {
      title: "Church Prayer Program",
      desc: "A design for a church prayer program",
      img: "/images/prayer-program.jpg.jpg",
    },
    {
      title: "Fashion Brand Logo",
      desc: "A logo design for a fashion designing brand",
      img: "/images/fashion-logo.jpg.jpg",
    },
    {
      title: "Hair Stylist Logo",
      desc: "A logo design for a hair stylist brand",
      img: "/images/hair-logo.jpg.jpg",
    },
    {
      title: "Crypto Community Logo",
      desc: "A logo design for a crypto community",
      img: "/images/crypto-logo.jpg.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
        Emmanuel Oluwadamilare Oke – Graphics Designer
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Hi, I’m a designer who loves turning ideas into visuals that feel simple,
        fresh, and easy to connect with. I focus on branding and visual storytelling
        that makes people stop and look.
      </p>

      {/* Projects */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-64 w-full object-cover rounded-lg mb-4 hover:scale-105 transition"


            />
            <h3 className="font-bold text-lg text-gray-800">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Let’s Connect</h2>
        <div className="flex justify-center gap-6 text-gray-600 text-2xl">
          <a href="mailto:okeoluwadamilareo@gmail.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/2349075504478" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/oluwagifted_official" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://x.com/oluwagifted20" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
