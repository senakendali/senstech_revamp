"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import WOW from "wow.js";
import "animate.css";
import "./globals.css"; // Ensure this path is correct

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false); // Hydration fix
  const [headerBgOpacity, setHeaderBgOpacity] = useState(0); // Default opacity
  const [bgImage, setBgImage] = useState("/images/main/banner/hero.png"); // Set default background image

  useEffect(() => {
    new WOW().init();
    // Hydration fix to ensure we can safely use window
    if (typeof window !== "undefined") {
      setHasMounted(true); // Set to true once the component is mounted on the client side

      const handleScroll = () => {
        try {
          // Calculate opacity based on scroll position
          const opacity = Math.min(window.scrollY / 200, 0.8); // Max opacity of 0.8
          setHeaderBgOpacity(opacity);
        } catch (error) {
          console.error("Error calculating scroll opacity:", error);
        }
      };

      // Add scroll event listener when component is mounted
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.warn("Window object is not available during SSR.");
    }
  }, []); // Only run once after the component is mounted

  // Hydration Fix: Don't render anything until the component is mounted on the client side
  if (!hasMounted) {
    return null; // Prevent SSR mismatch until component is mounted
  }

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Senstech</title>
        <meta
          name="description"
          content="Innovative Software Solutions in Indonesia: Senstech delivers cutting-edge software development services with a focus on quality and user experience. Transform your business with our custom applications."
        />
        <meta
          property="og:title"
          content="Senstech - Your Trusted Software Partner in Indonesia"
        />
        <meta
          property="og:description"
          content="Innovative Software Solutions in Indonesia: Senstech delivers cutting-edge software development services with a focus on quality and user experience. Transform your business with our custom applications."
        />
        <meta
          property="og:url"
          content="https://senstech.id"  // Replace with your actual URL
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-black text-white">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 transition-all duration-300`}
          style={{
            backgroundColor: `rgba(0, 0, 0, ${headerBgOpacity})`, // Dynamic opacity
          }}
        >
          <div className="text-2xl font-bold flex items-center space-x-2">
            <img src="/images/main/logo.png" alt="Logo" className="w-[150px]" />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="hover:text-gray-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="hover:text-gray-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="hover:text-gray-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col items-center justify-center bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url(${bgImage})`, // Dynamically set background image
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold wow animate__animated animate__fadeInUp">DRIVING DIGITAL TRANSFORMATION</h1>
          <p className="mt-4 text-lg text-center max-w-xl wow animate__animated animate__fadeInUp">
            Beyond software development, we offer expert consulting services to guide you through the entire software development process.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex items-center justify-center bg-[#000000]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-3">About Us</h2>
              <p className="mb-8">
                We're a dynamic team of tech enthusiasts and multimedia experts dedicated to crafting immersive experiences and cutting-edge solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex justify-center wow animate__animated animate__fadeInLeft">
                  <img src="/images/main/banner/about.png" alt="About" className="w-[350px] sm:w-[400px]" />
                </div>
                <div className="text-left wow animate__animated animate__fadeInRight">
                  <h3 className="text-2xl font-bold mb-3 uppercase">Welcome to Senstech</h3>
                  <p className="mb-4">
                    Welcome to Senstech, where innovation converges with expertise, and technology becomes a tool for transformation.
                  </p>
                  <p className="mb-4">
                    At Senstech, we don't just understand technology, we speak its language. From robust software development to seamless IT infrastructure, our suite of services is designed to elevate your business.
                  </p>
                  <p className="mb-4">
                    Our commitment to excellence is reflected in every line of code we write, every system we optimize, and every challenge we embrace.
                  </p>
                  <p>
                    Join us on a journey where innovation knows no bounds, and together, let's shape a future where your business thrives in the ever-evolving world of IT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="h-screen flex items-center justify-center bg-[#000000]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-3 text-white">Our Services</h2>
              <p className="mb-8 text-white">
                Unlock the potential of technology and creativity with our comprehensive range of services. Explore our services below and let's embark on a journey of digital transformation together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="wow animate__animated animate__fadeInUp text-left bg-[#212121] p-6 border-t-8 border-[#EA30CA] shadow-lg w-full md:w-80">
                  <h3 className="text-xl font-semibold text-white">WEB DEVELOPMENT</h3>
                  <p className="mt-2 text-white">Boost your digital presence with our top-notch web development services. We create stunning, responsive websites that drive traffic and engage your audience.</p>
                </div>
                <div className="wow animate__animated animate__fadeInUp text-left bg-[#212121] p-6 border-t-8 border-[#EA30CA] shadow-lg w-full md:w-80">
                  <h3 className="text-xl font-semibold text-white">SOFTWARE DEVELOPMENT</h3>
                  <p className="mt-2 text-white">Unlock the potential of your business with our cutting-edge software development services. From concept to launch, we create innovative solutions tailored to your needs.</p>
                </div>
                <div className="wow animate__animated animate__fadeInUp text-left bg-[#212121] p-6 border-t-8 border-[#EA30CA] shadow-lg w-full md:w-80">
                  <h3 className="text-xl font-semibold text-white">UX/UI Design</h3>
                  <p className="mt-2 text-white">Elevate your digital presence with our UX/UI design services. From intuitive interfaces to delightful user experiences, we create designs that engage and inspire.</p>
                </div>
              </div>
              <p className="mt-8 text-white">
                From concept to execution, we provide expert guidance and support every step of the way.  <br></br>Contact us to learn more about our services and how we can tailor a solution to meet your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex items-center justify-center bg-[#000000]">
          <h2 className="text-3xl sm:text-4xl">Contact</h2>
        </section>
      </div>
    </>
  );
}
