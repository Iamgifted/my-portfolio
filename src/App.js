import React from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const projects = [
  {
    title: "MK Design",
    desc: "A design for a furniture brand",
    img: "/Images/mk-design.jpg",
  },
  {
    title: "Florida Hair Beauty",
    desc: "A banner design for a hair stylist",
    img: "/Images/florida-hair.jpeg",
  },
  {
    title: "Church Valentine Program",
    desc: "A design for a church valentine program",
    img: "/Images/valentine-program.jpg",
  },
  {
    title: "Church Prayer Program",
    desc: "A design for a church prayer program",
    img: "/Images/prayer-program.jpg",
  },
  {
    title: "Fashion Brand Logo",
    desc: "A logo design for a fashion designing brand",
    img: "/Images/fashion-logo.jpg",
  },
  {
    title: "Hair Stylist Logo",
    desc: "A logo design for a hair stylist brand",
    img: "/Images/hair-logo.jpg",
  },
  {
    title: "Crypto Community Logo",
    desc: "A logo design for a crypto community",
    img: "/Images/crypto-logo.jpeg",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* SEO Metadata */}
      <Helmet>
        <title>Emmanuel Oluwadamilare Oke – Graphics Designer</title>
        <meta
          name="description"
          content="Portfolio of Emmanuel Oluwadamilare Oke, a graphics designer passionate about branding, logos, and visual storytelling."
        />
        <meta property="og:title" content="Emmanuel Oluwadamilare Oke – Graphics Designer" />
        <meta
          property="og:description"
          content="Explore my portfolio of creative branding, logos, and visual storytelling designs."
        />
        <meta property="og:image" content="/Images/og-preview.jpg" />
        <meta property="og:url" content="https://oluwagifted-portfolio.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Emmanuel Oluwadamilare Oke – Graphics Designer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Hi, I’m a designer who loves turning ideas into visuals that feel
          simple, fresh, and easy to connect with. I focus on branding and
          visual storytelling that makes people stop and look.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-xl shadow hover:shadow-lg transition group overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>

            {/* Hover Overlay with Link */}
            <a
              href={project.img}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 rounded-xl opacity-0 group-hover:opacity-100 transition"
            >
              <span className="text-white font-medium">🔍 View Full</span>
            </a>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <footer className="bg-white shadow p-6 rounded-xl text-center max-w-lg mx-auto">
        <h2 className="font-semibold text-lg text-gray-800 mb-4">
          Let’s Connect
        </h2>
        <div className="flex justify-center gap-6 text-2xl text-gray-600">
          <a
            href="mailto:okeoluwadamilare0@gmail.com"
            className="hover:text-gray-900 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/2349075594478"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/oluwagifted_official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/oluwagifted20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}
