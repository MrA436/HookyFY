// components/ClientLayout.jsx
'use client';

import Sidebar from "../components/sidebar";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />

      <main className={`flex-1 overflow-y-auto`}>
        {children}
      </main>
    </div>
  );
}
