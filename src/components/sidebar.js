"use client";
import React from "react";
import { Menu } from "lucide-react";

export default function Sidebar({ isOpen, openSidebar, closeSidebar }) {
  return (
    <>
      {/* 🔥 BACKGROUND OVERLAY (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* 🟣 TOGGLE BUTTON - Only show when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={openSidebar}  // calls openLeftSidebar from parent
          className="fixed z-40 bottom-6 left-6 p-3 rounded-full text-white shadow-xl
                    bg-gradient-to-tr from-[#0b0612] to-[#000000]
                    hover:from-[#140a1e] hover:to-[#050505]
                    transition-all duration-300 ease-in-out
                    md:top-4 md:left-4 md:bottom-auto md:rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      
      {/* 🟣 DESKTOP HOVER HOTSPOT - hidden on mobile */}
      {!isOpen && (
        <div
          onMouseEnter={openSidebar}
          className="absolute top-0 left-0 h-full w-2 bg-purple-600 opacity-10 hover:opacity-40 cursor-pointer z-10 hidden md:block"
        />
      )}

      {/* 🎯 SIDEBAR PANEL */}
      <div
        onMouseLeave={closeSidebar}
        className={`fixed top-0 left-0 h-full z-30 text-white transition-all duration-300 ease-in-out
          border-r border-purple-800 shadow-xl rounded-r-xl flex flex-col
          ${isOpen ? "w-[80vw] md:w-1/4 max-w-md p-6 bg-black bg-opacity-80" : "w-0 min-w-0 max-w-0 p-0 bg-transparent"} overflow-hidden`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {isOpen && (
          <>
            <p className="text-purple-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Navigation
            </p>

            <ul className="space-y-5 text-[15px] font-semibold tracking-tight">
              <li>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  Settings
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
