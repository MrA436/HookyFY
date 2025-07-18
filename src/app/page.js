'use client';
import Link from "next/link";
import { useState } from "react";


export default function homepage(){
    const [leftOpen, setLeftOpen] = useState(false)
    const [rightOpen, setrightOpen] = useState(false)

    function openLeft(){
        setLeftOpen(true)
        setrightOpen(false)
    }

    function openRight(){
        setLeftOpen(false)
        setrightOpen(true)
    }

    function closeBoth(){
        setLeftOpen(false)
        setrightOpen(false)
    }

    return(
        <main className="flex min-h-screen relative">
          {/* LEFT SIDEBAR */}
          <aside
            onMouseEnter={openLeft}
            onMouseLeave={closeBoth}
            className={`bg-black bg-opacity-90 text-white h-screen fixed top-0 left-0 z-20
              overflow-hidden transition-[width] duration-300 ease-in-out
              ${leftOpen ? "w-60" : "w-0"}`}
          >
            {leftOpen && (
              <h2 className="p-4 font-bold border-b border-purple-700 text-white">Navigation</h2>
            )}

            {/* {sidebar navigation content} */}
          </aside>

          {/* LEFT SIDEBAR HOTSPOT */}
          <div
            onMouseEnter={openLeft}
            className="hidden md:block fixed top-0 left-0 z-10 h-screen w-2 bg-purple-600 opacity-20 hover:opacity-60 cursor-pointer transition-opacity duration-300"
          />

            {/* RIGHT SIDEBAR */}
            <aside
              onMouseEnter={openRight}
              onMouseLeave={closeBoth}
              className={`bg-black bg-opacity-90 text-white h-screen fixed top-0 right-0 z-20
                overflow-hidden transition-[width] duration-300 ease-in-out
                ${rightOpen ? "w-60" : "w-0"}`}
            >
              <h2 className="p-4 font-bold border-b border-purple-700 text-white">Leaderboards</h2>

              {rightOpen && (
                <div className="p-4 text-sm text-white">
                  <p>🔥 Top Creators</p>
                  <ul className="mt-2 space-y-1">
                    <li>1. @creatorone — 142 hooks</li>
                    <li>2. @you — 87 hooks</li>
                    <li>3. @hookgod — 63 hooks</li>
                  </ul>
                </div>
              )}
            </aside>

            {/* RIGHT SIDEBAR HOTSPOT */}
            <div
              onMouseEnter={openRight}
              className="hidden md:block fixed top-0 right-0 z-10 h-screen w-2 bg-purple-600 opacity-20 hover:opacity-60 cursor-pointer transition-opacity duration-300"
            />

            <section
              style={{
                left: leftOpen ? "15rem" : "0",
                right: rightOpen ? "15rem" : "0",
              }}
              className="min-h-screen absolute top-0 bottom-0 overflow-auto transition-all duration-300 ease-in-out
                        bg-gradient-to-b from-[#0a0a0a] via-[#120316] to-[#0a0a0a]
                        text-gray-200 p-8 shadow-inner"
            >



        
        {/* Mobile toggle buttons */}
        <div className="flex justify-between mb-4">
           <button
            onClick={() => {
              if (leftOpen) closeBoth();
              else openLeft();
            }}
            className="md:hidden p-2 bg-gray-800 text-white rounded"
          >
            ☰
          </button>
          <button
            onClick={() => {
              if (rightOpen) closeBoth();
              else openRight();
            }}
            className="md:hidden p-2 bg-gray-600 text-white rounded"
          >
            🏆                                                                           
          </button>
        </div>
        
{/* Your homepage content */}
<div className="max-w-5xl mx-auto">

  {/* Header */}
  <h1 className="text-4xl font-bold text-purple-300 mb-2">HookyFY</h1>
  <p className="text-sm text-gray-400 mb-6">Welcome back, Creator ⚡</p>

  {/* Stats */}
  <div className="mb-6">
    <p className="text-lg text-gray-300">
      You’ve generated <span className="text-purple-500 font-semibold">87</span> hooks so far.
    </p>
  </div>

  {/* Recent Hooks */}
  <div className="bg-[#141414] border border-gray-800 p-4 rounded-xl shadow-inner mb-6">
    <h2 className="text-xl text-purple-400 font-semibold mb-3">Your Last 3 Hooks</h2>
    <ul className="space-y-2 text-sm">
      <li className="bg-[#1f1f1f] p-3 rounded text-gray-200">"What if everything they taught you was a lie?"</li>
      <li className="bg-[#1f1f1f] p-3 rounded text-gray-200">"He started with nothing. Today, he owns the game."</li>
      <li className="bg-[#1f1f1f] p-3 rounded text-gray-200">"You only need 7 seconds to trigger obsession."</li>
    </ul>
  </div>

  {/* Zeigarnik Effect */}

  <div className="bg-gradient-to-r from-purple-900 to-black p-4 rounded-xl mb-6 border border-purple-800 shadow-md">
    <h2 className="text-lg text-purple-300 font-semibold mb-1">Something’s Missing...</h2>
    <p className="text-sm text-gray-300 mb-2">You’ve generated hooks. But the next one could go viral.</p>
    <Link href="/generate" passHref>
      <button className="mt-2 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition">
        Generate One More
      </button>
    </Link>
  </div>

  {/* Tips Box */}
  <div className="bg-[#101010] p-4 rounded-xl border border-gray-700">
    <h3 className="text-md text-purple-300 font-bold mb-2">⚡ Quick Tips</h3>
    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
      <li>Keep your hook under 12 words.</li>
      <li>Use contrast: shock vs calm, rich vs poor, light vs dark.</li>
      <li>Don’t end the sentence — let them fill in the blank.</li>
    </ul>
  </div>

</div>
</section>
</main>
)
}
