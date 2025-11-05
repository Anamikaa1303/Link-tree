"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPalette, FaChartLine, FaLink } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    if (text.trim() === "") return alert("Please enter your handle!");
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      {/* === Hero Section === */}
      <section className="bg-[#254f1a] min-h-[100vh] grid md:grid-cols-2 grid-cols-1 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-4 p-8 md:p-14 mt-12 md:mt-16 text-center md:text-left">
          <p className="text-yellow-300 font-bold text-4xl md:text-7xl leading-snug">
            Everything you
          </p>
          <p className="text-yellow-300 font-bold text-4xl md:text-7xl leading-snug">
            are. In one,
          </p>
          <p className="text-yellow-300 font-bold text-4xl md:text-7xl leading-snug">
            simple link in bio.
          </p>

          <p className="text-yellow-300 text-base md:text-xl my-4 max-w-lg md:max-w-xl mx-auto md:mx-0">
            Join 50M+ people using <span className="font-semibold">Bittree</span> for their link in bio. One link to help you share everything you create, curate, and sell from your social media profiles.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-4 py-3 focus:outline-green-800 rounded-md bg-white w-full sm:w-[250px] md:w-[300px]"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={createTree}
              className="bg-pink-300 rounded-full px-5 py-3 font-semibold hover:bg-pink-400 transition-all w-full sm:w-auto"
            >
              Claim your Bittree
            </button>
          </div>

          {/* Extra Text */}
          <div className="mt-8 text-yellow-200 text-sm md:text-lg max-w-lg md:max-w-xl mx-auto md:mx-0">
            🌱 With <span className="font-semibold">Bittree</span>, your digital identity grows beautifully. Customize your bio link, share your passions, and help your audience find everything you do — all from one clean, simple page.
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center mt-8 md:mt-0">
          <img src="/home.png" alt="homepage image" className="w-[80%] max-w-md md:max-w-lg" />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="bg-gradient-to-r from-teal-700 to-emerald-800 min-h-[100vh] flex flex-col items-center justify-center text-center text-white px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Bittree?</h2>
        <p className="text-sm md:text-lg max-w-md md:max-w-3xl mb-12 text-gray-100">
          Build your personal brand effortlessly. Manage all your links, grow your audience, and showcase your content beautifully — all from one place.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-10 w-full max-w-6xl">
          <div className="bg-white text-emerald-800 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition-all border border-emerald-200">
            <FaPalette className="text-4xl md:text-5xl mx-auto mb-4 text-emerald-600" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Fully Customizable</h3>
            <p className="text-sm md:text-base">
              Choose colors, styles, and themes that match your personality or brand aesthetic.
            </p>
          </div>

          <div className="bg-white text-emerald-800 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition-all border border-emerald-200">
            <FaChartLine className="text-4xl md:text-5xl mx-auto mb-4 text-emerald-600" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-sm md:text-base">
              Track clicks and audience insights to understand how your followers engage with your content.
            </p>
          </div>

          <div className="bg-white text-emerald-800 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition-all border border-emerald-200">
            <FaLink className="text-4xl md:text-5xl mx-auto mb-4 text-emerald-600" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Seamless Integrations</h3>
            <p className="text-sm md:text-base">
              Connect your favorite platforms like Instagram, YouTube, Twitter, and more with one tap.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16">
          <button
            onClick={() => router.push("/generate")}
            className="bg-white text-emerald-800 px-6 md:px-8 py-3 md:py-4 font-semibold rounded-full text-base md:text-lg hover:bg-gray-100 transition-all"
          >
            Get Started for Free
          </button>
        </div>
      </section>
    </main>
  );
}
