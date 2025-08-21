"use client";

import { useState } from "react";
import HookSetsDisplay from '../../components/SliderPreview.js';

export default function GeneratePage() {
  const [formData, setFormData] = useState({ niche: "", sets: 1 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [displaySets, setDisplaySets] = useState(null);

  // Current sets with fallback
  const currentSets = formData.sets ?? 1;

  // Position percent used to align tooltip and fill background precisely
  const positionPercent = ((currentSets - 1) / 8) * 100;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "sets") {
      // Update sets immediately as user slides without resetting `submitted`
      setFormData((prev) => ({
        ...prev,
        sets: parseInt(value),
      }));

      // Important: Do NOT reset `submitted` here — keep the old output visible until user submits again
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setDisplaySets(formData.sets); // capture current slider value
    console.log("Submitted Niche:", formData.niche);
  };

  // Dummy function to simulate hook set generation for now
  const generateHookSets = (topic, setsCount) => {
    return Array.from({ length: setsCount }, (_, i) => ({
      hook: `🔥 Hook #${i + 1}: Grab attention fast on "${topic}"!`,
      caption: `✍️ Caption #${i + 1}: Engage with powerful words.`,
      cta: `👉 CTA #${i + 1}: Tell them what to do next.`,
      payoff: `💎 Payoff #${i + 1}: Reward that keeps them hooked.`,
    }));
  };

  // State to hold generated hook sets for display
  const [hookSets, setHookSets] = useState([]);

  // Function to trigger generation and update state
  const handleGenerate = () => {
    if (!formData.niche.trim()) {
      alert("Please enter a topic to generate hooks.");
      return;
    }
    const sets = generateHookSets(formData.niche, formData.sets);
    setHookSets(sets);
    setSubmitted(true);
  };

  // ✅ HERE'S THE MISSING RETURN:
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1e1b4b] to-[#3b0764] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-violet-300">
        Generate Captions & Hooks
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label
          htmlFor="niche"
          className="block mb-2 text-sm font-medium text-slate-300"
        >
          Enter your niche:
        </label>

        <input
          type="text"
          name="niche"
          id="niche"
          placeholder="e.g. Luxury, Wealth, Motivation"
          value={formData.niche}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 bg-slate-800 border border-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* slider */}

        <div className="relative w-full mb-6 px-2" style={{ padding: '0 8px' }}>
          {/* Tooltip cloud above thumb */}
          {showTooltip && (
            <div
              className="slider-tooltip"
              style={{
                left: `calc(${positionPercent}% + 8px)`, // 8px to offset padding
              }}
            >
              {formData.sets}
            </div>
          )}

          <input
            type="range"
            name="sets"
            min="1"
            max="9"
            step="1"
            value={formData.sets}
            onChange={handleChange}
            onMouseDown={() => setShowTooltip(true)}
            onMouseUp={() => setShowTooltip(false)}
            onTouchStart={() => setShowTooltip(true)}
            onTouchEnd={() => setShowTooltip(false)}
            className="styled-slider"
            style={{
              background: `linear-gradient(
                to right,
                #7c3aed 0%,
                #7c3aed ${positionPercent}%,
                #1a1a2e ${positionPercent}%,
                #1a1a2e 100%
              )`,
            }}
          />

          <style jsx>{`
            .styled-slider {
              appearance: none;
              width: 100%;
              height: 12px;
              border-radius: 9999px;
              background: transparent;
              outline: none;
              padding: 0;
              margin: 0;
            }

            .styled-slider::-webkit-slider-thumb {
              appearance: none;
              height: 16px;
              width: 16px;
              background: #7c3aed;
              border: 2px solid white;
              border-radius: 50%;
              cursor: pointer;
              margin-top: 0px; /* Adjust to center thumb */
              box-shadow: 0 0 5px rgba(124, 58, 237, 0.6);
              z-index: 2;
              position: relative;
              transition: background-color 0.3s ease;
            }

            .styled-slider::-webkit-slider-runnable-track {
              height: 12px;
              border-radius: 9999px;
              background: transparent;
            }

            .styled-slider:focus::-webkit-slider-thumb {
              background-color: #a78bfa;
            }

            .styled-slider::-moz-range-thumb {
              height: 16px;
              width: 16px;
              background: #7c3aed;
              border: 2px solid white;
              border-radius: 50%;
              cursor: pointer;
              box-shadow: 0 0 5px rgba(124, 58, 237, 0.6);
              margin-top: 2px;
              transition: background-color 0.3s ease;
            }

            .styled-slider::-moz-range-track {
              height: 12px;
              border-radius: 9999px;
              background: transparent;
            }

            /* Tooltip cloud styling */
            .slider-tooltip {
              position: absolute;
              top: -36px; /* place it above the thumb */
              transform: translateX(-50%);
              background-color: #7c3aed;
              color: white;
              padding: 6px 12px;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 600;
              box-shadow: 0 4px 8px rgba(124, 58, 237, 0.4);
              user-select: none;
              pointer-events: none;
              white-space: nowrap;
              z-index: 10;
              transition: opacity 0.2s ease;
            }
          `}</style>
        </div>

        {/* Generate button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 transition-colors duration-200 rounded font-semibold"
        >
          Generate {formData.sets || 1} {formData.sets > 1 ? "sets" : "set"}
        </button>
      </form>

      {/* Show the generated sets only after submit */}
      {submitted && <HookSetsDisplay sets={displaySets} submitted={submitted} />}

      {submitted && (
        <div className="mt-6 text-center">
          <p className="text-lg text-slate-300">
            You submitted: <span className="text-blue-400">{formData.niche}</span>
          </p>
        </div>
      )}
    </div>
  );
}

