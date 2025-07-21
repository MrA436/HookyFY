"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide gives modern icons, already included in shadcn setups
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Dashboard", href: "#" },
    { name: "Hook Generator", href: "#" },
    { name: "Saved Hooks", href: "#" },
    { name: "Account Settings", href: "#" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg shadow-lg transition duration-300 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 border-r border-zinc-800 p-6 pt-16 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:pt-10`}
      >
        <h2 className="text-xl font-bold text-white mb-8">📌 Navigation</h2>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block text-purple-300 hover:text-white transition font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
