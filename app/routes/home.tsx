import { type Route } from "./+types/home";
import { ArrowUp, Paperclip, ChevronDown, ArrowUpRight } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Incredible - The reasoning model" },
    { name: "description", content: "Incredible is an AI model that works through problems carefully before producing an answer." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <a href="#" className="font-bold text-xl tracking-tight">Incredible</a>
              <nav className="hidden md:flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Blog</a>
              </nav>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Log In</a>
              <a href="#" className="border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-md font-medium transition-colors">Join Now</a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50/50 text-xs font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            Announcing our Series A: $23M in total funding
            <a href="#" className="text-gray-900 underline underline-offset-2 ml-1">Read more</a>
          </div>

          <h1 className="text-5xl md:text-7xl font-pixel leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
            The reasoning model<br />built for what matter.
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Incredible is an AI model that works through problems carefully before producing an answer. Connect via API, build in minutes, and ship intelligence you can actually trust.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
              Join the waitlist <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </button>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center text-xs">👩‍🎤</div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs">👨‍🚀</div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-yellow-100 flex items-center justify-center text-xs">🧑‍🎨</div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-600">+</div>
              </div>
              10k+ users already joined
            </div>
          </div>
        </div>

        {/* Interactive Image Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative">
          <div className="relative aspect-[4/3] md:aspect-[2.5/1] w-full bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
            {/* Halftone image placeholder */}
            <div 
              className="absolute inset-0 z-10 opacity-60 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
                backgroundSize: '6px 6px'
              }}
            ></div>
            <img 
              src="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop" 
              alt="Landscape" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-110"
            />

            {/* Chat UI Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl p-4 border border-gray-200/60">
                <textarea 
                  placeholder="Ask anything.." 
                  className="w-full bg-transparent resize-none outline-none text-gray-900 placeholder:text-gray-500 min-h-[60px] text-lg"
                />
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm font-medium text-gray-600 transition-colors">
                      <Paperclip className="w-4 h-4" /> Attach
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm font-medium text-gray-600 transition-colors">
                      Select style <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors">
                    <ArrowUp className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Suggestions */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-medium text-gray-700 shadow-sm border border-gray-200/50 hover:bg-white transition-colors">
                  Analyze my contract
                </button>
                <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-medium text-gray-700 shadow-sm border border-gray-200/50 hover:bg-white transition-colors">
                  Summarize this log
                </button>
                <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-medium text-gray-700 shadow-sm border border-gray-200/50 hover:bg-white transition-colors">
                  Review my code
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
          <p className="text-sm text-gray-400 font-medium mb-8">Trusted by teams building serious products</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
            {/* Placeholder logos using text/icons since we don't have the actual SVG logos */}
            <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
              <div className="w-4 h-4 bg-gray-900 rounded-sm"></div> brightree
            </div>
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              practice fusion
            </div>
            <div className="text-2xl font-serif font-bold">Bonafide</div>
            <div className="flex items-center gap-1 text-xl font-bold tracking-tight">
              <div className="w-6 h-6 rounded-full border-4 border-gray-900 flex items-center justify-center"><div className="w-2 h-2 bg-gray-900 rounded-full"></div></div>
              twilio
            </div>
            <div className="flex flex-col items-start leading-none font-bold">
              <span className="text-sm">Parachute</span>
              <span className="text-xs text-gray-500">Health</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
