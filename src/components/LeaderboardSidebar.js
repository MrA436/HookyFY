"use client";
import React from "react";

export default function LeaderboardSidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {/* Backdrop (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-[0.5px] transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar panel */}
      <div
        onMouseLeave={closeSidebar}
        className={`
          fixed top-0 right-0 h-full z-30 text-white
          transition-transform duration-300 ease-in-out
          border-l-2 border-purple-500 shadow-2xl rounded-l-xl
          w-[80vw] md:w-1/4 max-w-md p-6 bg-[#0d0d0d]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >


        {/* Header */}
        {/* CONTENT WRAPPER */}
        <div className="flex flex-col h-full relative z-10">
          <h2 className="text-sm text-neutral-400 font-semibold tracking-[0.25em] mb-6 uppercase">
            Top Creators
          </h2>

          <div className="space-y-4">
            {[
              { rank: 1, name: "@creatorone", hooks: 142 },
              { rank: 2, name: "@you", hooks: 87 },
              { rank: 3, name: "@hookgod", hooks: 63 },
            ].map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-purple-400 flex items-center gap-1">
                    <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-purple-700" />
                    #{user.rank}
                  </span>
                  <span className="text-[12px] text-white font-medium">
                    {user.name}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full border border-purple-500/50 bg-black/40 text-purple-300 text-xs font-medium shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                  {user.hooks} hooks
                </span>
              </div>
            ))}
          </div>

          {/* 🏷️ TAGLINE at bottom */}
          <div className="mt-auto pt-4 border-t border-white/5 text-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-500">
              Power. Discipline. Mastery.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
