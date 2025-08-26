"use client";
import React from "react";
import { Menu, Home, Wand2, Bookmark, Info, Settings, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isOpen, openSidebar, closeSidebar }) {
  const activePath = "/"; // later: get from router to highlight current page

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/generate", label: "Generate", icon: <Wand2 className="w-4 h-4" /> },
    { href: "/saved", label: "Saved", icon: <Bookmark className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* 🔥 BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-[2px]"
          onClick={closeSidebar}
        />
      )}

      {/* 🟣 FLOATING BUTTON */}
      {!isOpen && (
        <button
          onClick={openSidebar}
          className="fixed z-40 bottom-6 left-6 p-3 rounded-full text-white shadow-xl
                     bg-gradient-to-tr from-[#0b0612] to-[#000000]
                     hover:from-[#140a1e] hover:to-[#050505]
                     transition-all duration-300 ease-in-out
                     md:top-4 md:left-4 md:bottom-auto md:rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* 🎯 SIDEBAR */}
      <div
        onMouseLeave={closeSidebar}
        className={`fixed top-0 left-0 h-full z-30 text-white transition-all duration-300 ease-in-out
          border-r border-purple-800 shadow-xl rounded-r-xl flex flex-col justify-between
          ${isOpen ? "w-[80vw] md:w-56 p-4 bg-black/90" : "w-0 min-w-0 max-w-0 p-0 bg-transparent"} overflow-hidden`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {isOpen && (
          <>
            {/* 🔥 LOGO */}
            <div className="mb-6">
              <h1 className="text-lg font-bold tracking-tight">Hooky<span className="text-purple-400">FY</span></h1>
              <p className="text-[11px] text-gray-400">Create. Save. Dominate.</p>
            </div>

            {/* 📂 NAVIGATION */}
            <div className="flex-1">
              <p className="text-purple-400 text-[11px] font-semibold uppercase tracking-wider mb-2">Core</p>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-2 py-2 rounded-md transition-colors
                        ${activePath === item.href
                          ? "bg-purple-900/40 text-purple-300 border-l-2 border-purple-500"
                          : "text-gray-200 hover:text-purple-400 hover:bg-white/5"
                        }`}
                    >
                      {item.icon} {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="my-4 border-t border-purple-900/50" />

              <p className="text-purple-400 text-[11px] font-semibold uppercase tracking-wider mb-2">Account</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/profile" className="flex items-center gap-3 px-2 py-2 text-gray-200 hover:text-purple-400 hover:bg-white/5 rounded-md">
                    <User className="w-4 h-4" /> Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="flex items-center gap-3 px-2 py-2 text-gray-200 hover:text-purple-400 hover:bg-white/5 rounded-md">
                    <Settings className="w-4 h-4" /> Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* ⚡ FOOTER */}
            <div className="text-[11px] text-gray-500 border-t border-purple-900/50 pt-3">
              <Link href="/about" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                <Info className="w-3 h-3" /> About
              </Link>
              <p className="mt-2">© 2025 HookyFY</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
