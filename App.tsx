
import React, { useState } from 'react';
import Starfield from './components/Starfield';
import CountdownClock from './components/CountdownClock';
import Greeting from './components/Greeting';
import { GoogleGenAI, Type } from "@google/genai";

const App: React.FC = () => {
  const [resolutionPrompt, setResolutionPrompt] = useState('');
  const [aiPlan, setAiPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Gemini logic for a personalized New Year "Action Plan"
  const generateActionPlan = async () => {
    if (!resolutionPrompt.trim()) return;
    
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `The user has the following goal for 2026: "${resolutionPrompt}". 
        Act as a coach from the Ready Hands Initiative (RHI). 
        Provide a concise, encouraging 3-step action plan using our professional yet warm tone. 
        Focus on "impact" and "steady progress". Keep it under 100 words.`,
      });
      setAiPlan(response.text || "Couldn't generate plan. You've got this anyway!");
    } catch (error) {
      console.error("AI Error:", error);
      setAiPlan("Error connecting to the AI Oracle. Let's just say: focus, breathe, and win!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000814] text-slate-100 py-12">
      <Starfield />

      {/* Hero Header */}
      <header className="relative z-10 text-center px-4 animate-fade-in">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-amber-500">
          The Countdown to Excellence
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black mb-2 gold-text drop-shadow-2xl">
          2026
        </h1>
        <p className="text-lg sm:text-xl font-light text-slate-400 tracking-widest uppercase">
          A New Era of Impact
        </p>
      </header>

      {/* Countdown Section */}
      <section className="relative z-10 w-full flex justify-center">
        <CountdownClock />
      </section>

      {/* Message Section */}
      <section className="relative z-10 w-full flex justify-center py-10">
        <Greeting />
      </section>

      {/* Interactive AI Resolution Tool (A little extra for the "World Class" feel) */}
      <section className="relative z-10 w-full max-w-lg px-6 mt-8">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl shadow-2xl">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">
            RHI Impact Planner
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Tell us one thing you want to achieve in 2026, and RHI will give you an actionable start.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={resolutionPrompt}
              onChange={(e) => setResolutionPrompt(e.target.value)}
              placeholder="e.g. Master a new language..."
              className="flex-grow bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
            />
            <button 
              onClick={generateActionPlan}
              disabled={isLoading || !resolutionPrompt}
              className="bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold px-6 py-2 rounded-xl text-sm transition-all shadow-lg active:scale-95"
            >
              {isLoading ? 'Thinking...' : 'Get Plan'}
            </button>
          </div>
          {aiPlan && (
            <div className="mt-6 p-4 bg-slate-950/40 rounded-lg border border-slate-800/50 text-sm leading-relaxed text-slate-300 animate-fade-in-down">
              <strong className="block text-amber-500 mb-2">Your 2026 Strategy:</strong>
              {aiPlan}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-20 text-center opacity-40">
        <p className="text-[10px] tracking-widest uppercase">
          &copy; 2025 Ready Hands Initiative &bull; Towards a Meaningful 2026
        </p>
      </footer>

      {/* Global Animations Style */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out; }
      `}</style>
    </main>
  );
};

export default App;
