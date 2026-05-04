/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Home as HomeIcon, 
  Compass, 
  MessageCircle, 
  Mic, 
  Play, 
  Volume2, 
  CheckCircle2, 
  ArrowRight,
  ChevronLeft,
  Search,
  MoreVertical,
  Plus,
  Send,
  TrendingUp,
  X
} from 'lucide-react';

// --- Types ---
type View = 'home' | 'scenarios' | 'chat' | 'practice';

// --- Components ---

const BottomNav = ({ currentView, setView }: { currentView: View, setView: (v: View) => void }) => {
  const tabs: { id: View; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'scenarios', label: 'Scenarios', icon: Compass },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'practice', label: 'Practice', icon: Mic },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg rounded-t-[40px] h-24 shadow-[0_-10px_30px_rgba(184,232,192,0.15)] flex justify-around items-center px-6 pb-4">
      {tabs.map((tab) => {
        const isActive = currentView === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`flex flex-col items-center justify-center px-5 py-2.5 rounded-full transition-all duration-300 ${
              isActive 
                ? 'bg-primary-container text-emerald-900 scale-100' 
                : 'text-slate-400 hover:text-emerald-500 scale-90'
            }`}
          >
            <tab.icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="font-sans font-medium text-[11px] mt-1">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

const Header = ({ title, showBack = false, onBack = () => {} }: { title: string, showBack?: boolean, onBack?: () => void }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md px-6 h-16 flex items-center justify-between border-b border-emerald-900/5">
    <div className="flex items-center gap-3">
      {showBack && (
        <button onClick={onBack} className="p-2 -ml-2 text-on-surface active:scale-95 transition-transform">
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {!showBack && (
        <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary-fixed ring-2 ring-primary-container/20">
          <img 
            alt="User" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop" 
          />
        </div>
      )}
      <span className="text-xl font-black text-emerald-900 tracking-tighter">{title}</span>
    </div>
    <div className="flex items-center gap-1 text-emerald-500 font-bold">
      7 <Flame className="w-5 h-5 fill-current" />
    </div>
  </header>
);

// --- Views ---

const HomeView = ({ onStart }: { onStart: () => void }) => (
  <div className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8">
    <section className="space-y-1">
      <h1 className="text-2xl font-bold text-on-surface leading-tight">
        Hey Alex, let's practice your daily chat English!
      </h1>
      <p className="text-on-surface-variant opacity-70">You're on a 5-day streak! Keep it up.</p>
    </section>

    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">Today's Scenario</h2>
        <span className="text-primary text-xs font-bold">New Daily</span>
      </div>
      
      <div 
        onClick={onStart}
        className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-secondary-container ambient-glow"
      >
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2647&auto=format&fit=crop" 
            alt="Cafe"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
          <div className="space-y-1">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-xs font-bold rounded-full">Intermediate</span>
            <h3 className="text-2xl font-bold text-white">Ordering at a Cafe</h3>
            <p className="text-white/90 text-sm">Learn how to customize your oat milk latte like a local.</p>
          </div>
        </div>
      </div>
    </section>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-secondary-fixed p-6 rounded-[2rem] flex flex-col justify-between h-40">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
          <Flame className="w-5 h-5 text-primary fill-current" />
        </div>
        <div>
          <p className="text-4xl font-bold text-on-secondary-fixed leading-none">5</p>
          <p className="text-sm font-bold text-on-secondary-fixed-variant">Day Streak</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center space-y-2 h-40">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-slate-100" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="6" />
            <circle 
              className="text-primary" 
              cx="40" cy="40" 
              fill="transparent" r="34" 
              stroke="currentColor" strokeWidth="6" 
              strokeDasharray="213.6" 
              strokeDashoffset={213.6 * 0.3} 
              strokeLinecap="round" 
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-on-surface">70%</span>
          </div>
        </div>
        <p className="text-sm font-bold text-on-surface-variant">Daily Goal</p>
      </div>
    </div>

    <button 
      onClick={onStart}
      className="w-full py-5 bg-primary text-white font-bold text-lg rounded-full pill-shadow active:scale-95 transition-all flex items-center justify-center gap-2"
    >
      Start Today's Session
      <Play className="w-5 h-5 fill-current" />
    </button>
  </div>
);

const ScenariosView = () => {
  const categories = [
    {
      title: 'School',
      color: 'bg-secondary-container',
      scenarios: [
        { title: 'Ask for notes', desc: 'Politely ask a classmate for the lecture notes.', level: 'Beginner' },
      ]
    },
    {
      title: 'Friends',
      color: 'bg-primary-container',
      scenarios: [
        { title: 'Weekend Plans', desc: 'Coordinate a hangout spot with the group.', level: 'Casual' },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-32 px-margin-mobile max-w-2xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Choose your vibe</h1>
        <p className="text-on-surface-variant">Pick a scenario to practice real-world talk.</p>
      </header>

      <div className="grid gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-4">
            <h2 className="text-sm font-bold text-primary px-2">{cat.title}</h2>
            {cat.scenarios.map((s) => (
              <div 
                key={s.title}
                className={`${cat.color} rounded-[2rem] p-6 ambient-glow cursor-pointer active:scale-[0.98] transition-transform`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    {cat.title === 'School' ? <ArrowRight className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
                  </div>
                  <span className="bg-white/50 px-3 py-1 rounded-full text-xs font-bold">{s.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        ))}
        
        {/* Featured Card */}
        <div className="bg-primary text-white rounded-[2rem] p-8 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold bg-white/20 px-4 py-1.5 rounded-full mb-4 inline-block">Daily Challenge</span>
            <h3 className="text-2xl font-bold">The "No-Awkward" Intro</h3>
            <p className="text-sm opacity-90 max-w-[240px] mx-auto">Practice introducing yourself at a rooftop party.</p>
            <button className="bg-primary-container text-on-primary-container font-bold px-8 py-3 rounded-full mt-4 hover:opacity-90 active:scale-95 transition-all">
              Start Challenge
            </button>
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary-container opacity-20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

const PracticeView = ({ onComplete }: { onComplete: () => void }) => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center px-6">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-2xl font-bold">How would you say this out loud?</h1>
        <p className="text-sm font-bold text-on-surface-variant">Tap the button and speak naturally</p>
      </div>

      <div className="w-full bg-secondary-container rounded-[2rem] p-8 text-center relative overflow-hidden ambient-glow mb-12">
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-white transition-colors">
            <Volume2 className="w-5 h-5 text-primary" />
          </button>
        </div>
        <p className="text-3xl font-bold text-on-primary-container py-6 leading-snug">
          "I'm so down for coffee later!"
        </p>
        <div className="flex justify-center gap-2">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Casual</span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Slang</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center py-12 flex-1">
        <AnimatePresence>
          {isRecording && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute w-48 h-48 bg-primary-container/40 rounded-full blur-xl"
            />
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => {
            setIsRecording(!isRecording);
            if (!isRecording) {
              setTimeout(onComplete, 3000);
            }
          }}
          className="relative w-32 h-32 bg-primary-container rounded-full shadow-[0_10px_30px_rgba(184,232,192,0.4)] flex items-center justify-center active:scale-95 transition-transform"
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-inner transition-colors ${isRecording ? 'bg-red-500' : 'bg-primary'}`}>
            <Mic className="w-10 h-10 text-white fill-current" />
          </div>
        </button>
      </div>

      <div className="w-full space-y-6">
        <div className="flex items-center justify-center gap-2">
          {isRecording && (
            <div className="flex space-x-1">
              <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-primary rounded-full" />
              <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-primary/60 rounded-full" />
              <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-primary/30 rounded-full" />
            </div>
          )}
          <span className={`text-sm font-bold ${isRecording ? 'text-primary' : 'text-on-surface-variant'}`}>
            {isRecording ? 'Listening...' : 'Ready to record'}
          </span>
        </div>
      </div>
    </div>
  );
};

const FeedbackOverlay = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-white px-6 pt-24 pb-12 flex flex-col overflow-y-auto"
  >
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold">Instant Feedback</h1>
      <p className="text-on-surface-variant">Let's refine that sentence!</p>
    </div>

    <div className="space-y-6 flex-1">
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-on-surface-variant px-2">What you said</h2>
        <div className="bg-surface-container rounded-3xl p-6 italic text-body-lg">
          "I have went to the store yesterday."
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-bold text-emerald-600 px-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" /> The better way
        </h2>
        <div className="bg-primary-container rounded-3xl p-6 relative overflow-hidden">
          <CheckCircle2 className="absolute -top-4 -right-4 w-24 h-24 text-emerald-900/10" />
          <p className="text-xl font-bold text-on-primary-container relative z-10">"I went to the store yesterday."</p>
        </div>
      </div>

      <div className="bg-secondary-fixed rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-on-secondary-fixed font-bold text-sm">
          <TrendingUp className="w-4 h-4" /> Why?
        </div>
        <p className="text-sm leading-relaxed text-on-secondary-fixed">
          In English, when you mention a specific time in the past like <strong>"yesterday,"</strong> we use the <strong>Past Simple</strong> ("went") instead of the Present Perfect.
        </p>
      </div>
    </div>

    <button 
      onClick={onClose}
      className="w-full py-5 bg-primary text-white font-bold text-lg rounded-full pill-shadow mt-8 flex items-center justify-center gap-2"
    >
      Got it <ArrowRight className="w-5 h-5" />
    </button>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('home');
  const [isLiking, setIsLiking] = useState(false); // Demo state
  const [showFeedback, setShowFeedback] = useState(false);

  // Auto-switch to Scenarios for demo if needed, but we keep it interactive
  
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container">
      <Header title="LingoVibe" />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeView onStart={() => setView('practice')} />
            </motion.div>
          )}
          {view === 'scenarios' && (
            <motion.div 
              key="scenarios"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ScenariosView />
            </motion.div>
          )}
          {view === 'chat' && (
            <motion.div 
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-24 pb-32 px-6 text-center text-slate-400"
            >
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>Chat feature coming soon!</p>
            </motion.div>
          )}
          {view === 'practice' && (
            <motion.div 
              key="practice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PracticeView onComplete={() => setShowFeedback(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showFeedback && (
          <FeedbackOverlay onClose={() => {
            setShowFeedback(false);
            setView('home');
          }} />
        )}
      </AnimatePresence>

      <BottomNav currentView={view} setView={setView} />
    </div>
  );
}
