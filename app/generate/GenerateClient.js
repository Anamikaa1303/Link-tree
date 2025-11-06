"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function GenerateClient() {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (index, link, linktext) => {
    setLinks((prev) =>
      prev.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };

  const addLink = () => setLinks([...links, { link: "", linktext: "" }]);

  const submitLinks = async () => {
    if (!handle || !links[0].linktext || !pic) {
      toast.error("Please fill all required fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links, handle, pic, desc }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Your BitTree has been created!");
        setLinks([{ link: "", linktext: "" }]);
        setPic("");
        setHandle("");
        setDesc("");
      } else {
        toast.error(data.message || "Failed to create BitTree");
      }
    } catch (error) {
      toast.error("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-[125vh] grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-center p-8 text-gray-900">
        <div className="w-full max-w-lg flex flex-col gap-6">
          <h1 className="font-bold text-4xl text-center mb-6">
            Create your BitTree
          </h1>

          {/* Step 1 */}
          <div>
            <h2 className="font-semibold text-2xl mb-2">Step 1: Claim your Handle</h2>
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="px-4 py-2 w-full bg-white border border-gray-300 rounded-full focus:outline-pink-500"
              type="text"
              placeholder="Choose a handle"
            />
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="font-semibold text-2xl mb-2">Step 2: Add Links</h2>
            {links.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-2 mb-2">
                <input
                  value={item.linktext}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full focus:outline-pink-500 flex-1"
                  placeholder="Enter link text"
                />
                <input
                  value={item.link}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full focus:outline-pink-500 flex-1"
                  placeholder="Enter link URL"
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="p-3 bg-slate-900 text-white font-bold rounded-3xl hover:bg-slate-800 transition"
            >
              + Add Link
            </button>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="font-semibold text-2xl mb-2">
              Step 3: Add Picture and Description
            </h2>
            <input
              value={pic}
              onChange={(e) => setPic(e.target.value)}
              className="px-4 py-2 mb-2 w-full bg-white border border-gray-300 rounded-full focus:outline-pink-500"
              placeholder="Enter link to your picture"
            />
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="px-4 py-2 mb-2 w-full bg-white border border-gray-300 rounded-full focus:outline-pink-500"
              placeholder="Enter description"
            />
            <button
              disabled={loading || !pic || !handle || !links[0].linktext}
              onClick={submitLinks}
              className={`p-3 px-6 font-bold rounded-3xl text-white ${
                loading
                  ? "bg-slate-500 cursor-not-allowed"
                  : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              {loading ? "Creating..." : "Create your BitTree"}
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center items-center bg-[#E9C0E9]">
        <Image
          src="/generate.png"
          alt="Generate your links"
          width={800}
          height={800}
          className="h-full object-contain"
          priority
        />
        <ToastContainer />
      </div>
    </div>
  );
}
