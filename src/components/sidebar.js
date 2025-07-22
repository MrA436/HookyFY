"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full">
      {/* Hover hotspot when collapsed (overlay, no layout shift) */}
      {!isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          className="absolute top-0 left-0 h-full w-2 bg-purple-600 opacity-10 hover:opacity-40 cursor-pointer z-10"
        />
      )}

      {/* Sidebar panel */}
      <div
        onMouseLeave={() => setIsOpen(false)}
        className={`h-full bg-black bg-opacity-90 text-white transition-all duration-300 ease-in-out
          ${isOpen ? "w-60" : "w-0"} overflow-hidden`}
      >
        {isOpen && (
          <div className="w-full h-full flex flex-col">
            <h2 className="p-4 border-b border-purple-700 font-bold">
              Navigation
            </h2>
            <nav className="flex flex-col p-4 space-y-3">
              <a href="#" className="hover:text-purple-400">Dashboard</a>
              <a href="#" className="hover:text-purple-400">Hook Generator</a>
              <a href="#" className="hover:text-purple-400">Saved Hooks</a>
              <a href="#" className="hover:text-purple-400">Account Settings</a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
