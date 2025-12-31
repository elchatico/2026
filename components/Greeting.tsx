
import React from 'react';

const Greeting: React.FC = () => {
  return (
    <div className="max-w-2xl text-center px-6 space-y-6 mt-10">
      <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 font-bold tracking-tight">
        Happy New Year in Advance!
      </h2>
      
      <div className="bg-slate-900/30 border border-slate-800/50 p-6 sm:p-8 rounded-3xl shadow-inner text-slate-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 blur-3xl -mr-12 -mt-12 transition-all duration-500 group-hover:bg-gold-400/20"></div>
        
        <p className="text-lg leading-relaxed mb-6 italic">
          &ldquo;Congratulations! You’ve officially survived 365 days of &apos;let me circle back to you&apos; and &apos;can you see my screen?&apos; 
          From Grace and the <span className="text-amber-400 font-semibold">Ready Hands Initiative (RHI)</span>, 
          we want to say: you didn&apos;t just make it—you mastered it.&rdquo;
        </p>
        
        <p className="text-base leading-relaxed">
          As we approach 2026, we’re wishing you a year of fewer &apos;technical difficulties&apos; and more &apos;extraordinary breakthroughs.&apos; 
          Here’s to a prosperous new year where your impact is as steady as our countdown.
        </p>

        <div className="mt-8 pt-6 border-t border-slate-800/50 flex items-center justify-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold border border-amber-500/30">
            RHI
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-slate-100">Grace & The Team</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500">Ready Hands Initiative</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
