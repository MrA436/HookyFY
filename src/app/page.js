'use client';
import Sidebar from "../components/sidebar";
import LeaderboardSidebar from "../components/LeaderboardSidebar";
import Link from "next/link";
import { useState } from "react";

export default function Homepage() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  function openLeftSidebar() {
    setIsLeftSidebarOpen(true);
    setIsRightSidebarOpen(false);
  }

  function openRightSidebar() {
    setIsLeftSidebarOpen(false);
    setIsRightSidebarOpen(true);
  }

  function closeBothSidebars() {
    setIsLeftSidebarOpen(false);
    setIsRightSidebarOpen(false);
  }

  return (
    <main className="flex min-h-screen relative">
      <>
        {/* LEFT SIDEBAR - desktop pushes content, mobile overlays */}
        <Sidebar
          isOpen={isLeftSidebarOpen}
          openSidebar={openLeftSidebar}
          closeSidebar={closeBothSidebars}
        />

        {/* LEFT SIDEBAR HOTSPOT for desktop */}
        {!isLeftSidebarOpen && (
          <div
            className="hidden md:block fixed top-0 left-0 h-full w-2 bg-purple-600 opacity-10 hover:opacity-40 cursor-pointer z-20"
            onMouseEnter={openLeftSidebar}
          />
        )}

        {/* RIGHT SIDEBAR HOTSPOT for desktop */}
        {!isRightSidebarOpen && (
          <div
            className="hidden md:block fixed top-0 right-0 h-full w-2 bg-purple-600 opacity-10 hover:opacity-40 cursor-pointer z-20"
            onMouseEnter={openRightSidebar}
          />
        )}

        {/* LEADERBOARD SIDEBAR - use correct props and state */}
        <LeaderboardSidebar isOpen={isRightSidebarOpen} closeSidebar={closeBothSidebars} />

        {/* Crown button for leaderboard - visible only when sidebar is closed on mobile */}
        {!isRightSidebarOpen && (
          <button
            onClick={openRightSidebar} // No need to check sidebar state here, it's already closed
            className="md:hidden fixed bottom-5 right-5 z-50 bg-gradient-to-br from-[#1a1a1a] to-[#2a0e3f] hover:from-[#2a2a2a] hover:to-[#3a124f] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            aria-label="Open Leaderboard"
          >
            {/* Crown Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4.586 4.586a1 1 0 001.414 0L12 8l1.586 1.586a1 1 0 001.414 0L20 6l-2 12H6L4 6z" />
            </svg>
          </button>
        )}

        {/* Your homepage content */}
        <div className="w-full max-w-screen-xl px-4 py-8 mx-auto">
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
      </>
    </main>
  );
}