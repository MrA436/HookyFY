"use client";

export default function HookSetsDisplay({ sets, submitted }) {
  if (!submitted) return null;

  // Static demo pool of 9 sets (assumed max)
  const allData = [
    {
      hook: "🔥 Hook #1: Unlock your hidden potential today!",
      caption: "✍️ Caption #1: Discover the secrets experts don’t tell you.",
      cta: "👉 CTA #1: Click now to start your transformation.",
      payoff: "💎 Payoff #1: Experience results that speak for themselves.",
    },
    {
      hook: "🔥 Hook #2: Riches don’t wait. Neither should you.",
      caption: "✍️ Caption #2: The top 1% don’t scroll, they act.",
      cta: "👉 CTA #2: Level up now or stay behind.",
      payoff: "💎 Payoff #2: Build a life worth flexing.",
    },
    {
      hook: "🔥 Hook #3: Your dream life is one habit away.",
      caption: "✍️ Caption #3: Motivation fades, discipline builds.",
      cta: "👉 CTA #3: Tap into elite mode.",
      payoff: "💎 Payoff #3: See the compounding effect.",
    },
    {
      hook: "🔥 Hook #4: What if this is your breakthrough moment?",
      caption: "✍️ Caption #4: Don’t wait for signs. Be the signal.",
      cta: "👉 CTA #4: Start before you’re ready.",
      payoff: "💎 Payoff #4: Let results do the talking.",
    },
    {
      hook: "🔥 Hook #5: Scroll less. Build more.",
      caption: "✍️ Caption #5: Algorithms don’t make millionaires. Actions do.",
      cta: "👉 CTA #5: Tap to break the loop.",
      payoff: "💎 Payoff #5: Escape average. Enter legacy.",
    },
    {
      hook: "🔥 Hook #6: Your future self is watching.",
      caption: "✍️ Caption #6: Regret is heavier than discipline.",
      cta: "👉 CTA #6: Invest minutes. Reap decades.",
      payoff: "💎 Payoff #6: Small actions. Massive returns.",
    },
    {
      hook: "🔥 Hook #7: Be the person your bio claims.",
      caption: "✍️ Caption #7: No one respects potential. Only proof.",
      cta: "👉 CTA #7: Show the receipts.",
      payoff: "💎 Payoff #7: Legacy isn’t posted. It’s built.",
    },
    {
      hook: "🔥 Hook #8: Mediocrity is crowded. Go elite.",
      caption: "✍️ Caption #8: Normal gets ignored. Extreme gets paid.",
      cta: "👉 CTA #8: Play bigger. Win louder.",
      payoff: "💎 Payoff #8: Become unmissable.",
    },
    {
      hook: "🔥 Hook #9: If not now, when?",
      caption: "✍️ Caption #9: Fear never left. You just moved anyway.",
      cta: "👉 CTA #9: Take the shot.",
      payoff: "💎 Payoff #9: Legends are built, not born.",
    },
  ];

// Limit data to requested number of sets
  const limitedData = allData.slice(0, Math.min(sets, allData.length));

  // Copy handler
  const handleCopy = (set) => {
    const textToCopy = `
${set.hook}
${set.caption}
${set.cta}
${set.payoff}
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    }).catch(() => {
      alert("Failed to copy!");
    });
  };

  // Demo save handler
  const handleSave = (index) => {
    alert(`Set ${index + 1} saved! (Demo action)`);
    // Later: Add real save logic here (localStorage, backend API, etc.)
  };

  return (
    <div className="mt-8 w-full max-w-xl">
      {limitedData.map(({ hook, caption, cta, payoff }, index) => (
        <div
          key={index}
          className="mb-6 p-4 border-2 border-violet-500 rounded-lg bg-[#1a1a2e] text-white"
        >
          <h3 className="text-lg font-bold mb-2 text-violet-300">Set {index + 1}</h3>
          <p><strong>Hook:</strong> {hook}</p>
          <p><strong>Caption:</strong> {caption}</p>
          <p><strong>CTA:</strong> {cta}</p>
          <p><strong>Payoff:</strong> {payoff}</p>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => handleSave(index)}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-xl text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            aria-label="Save hook set"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Save
          </button>

          <button
            onClick={() => handleCopy({ hook, caption, cta, payoff })}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-xl text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            aria-label="Copy hook set to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            Copy
          </button>
        </div>


        </div>
      ))}
    </div>
  );
}