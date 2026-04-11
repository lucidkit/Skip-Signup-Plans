import { motion } from "framer-motion";
import {
  ChevronRight,
  Play,
  CheckCircle2,
  Star,
  Users,
  Target,
  Radio,
  Clock,
  Crown,
  BookOpen,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "0 8px 64px rgba(30,80,200,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
} as const;

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 30% 0%, #0c1e3d 0%, #07111f 55%, #030810 100%)",
      }}
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-700/8 blur-[110px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-indigo-800/10 blur-[90px]" />
      </div>

      {/* ───── Navigation ───── */}
      <nav className="relative z-20">
        <div
          className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.70) 0%, rgba(220,38,38,0.80) 100%)",
                border: "1px solid rgba(255,255,255,0.20)",
                boxShadow: "0 4px 16px rgba(239,68,68,0.30)",
              }}
            >
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight">Dr. Grand</span>
              <span className="text-white/40 text-[10px] block -mt-0.5">Trading</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Mentorship", "Mentors", "Trading Journal", "Competition", "Student Results"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/60 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                {item}
                {item === "Trading Journal" && (
                  <span
                    className="ml-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full align-top"
                    style={{
                      background: "rgba(34,197,94,0.20)",
                      color: "#4ade80",
                      border: "1px solid rgba(34,197,94,0.30)",
                    }}
                  >
                    APP
                  </span>
                )}
              </a>
            ))}
          </div>

          <div
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <Users className="w-4 h-4 text-white/50" />
          </div>
        </div>

        {/* Competition banner */}
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 py-2.5"
          >
            <span className="text-xs font-bold" style={{ color: "#4ade80" }}>FREE</span>
            <span className="text-white/50 text-xs">Competition</span>
            <span className="text-white font-bold text-xs tracking-wide">LIVE NOW!</span>
            <button
              className="px-3 py-1 rounded-lg text-[11px] font-semibold transition-all active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.80) 0%, rgba(22,163,74,0.90) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                boxShadow: "0 2px 12px rgba(34,197,94,0.30)",
              }}
            >
              Join Competition
            </button>
          </motion.div>
        </div>
      </nav>

      {/* ───── Hero Section ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(250,204,21,0.12)",
                border: "1px solid rgba(250,204,21,0.20)",
              }}
            >
              <Star className="w-3.5 h-3.5" style={{ color: "#fbbf24" }} />
              <span className="text-xs font-semibold" style={{ color: "#fcd34d" }}>
                Trusted by 800+ Traders
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
              Master{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Binary Options
              </span>{" "}
              Trading
            </h1>

            <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Join our proven mentorship program and learn to trade profitably with expert guidance, strategies, and a supportive community.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <button
                className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 60%, #0369a1 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(6,182,212,0.35)",
                }}
              >
                Become a Student
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  backdropFilter: "blur(20px)",
                }}
              >
                <Play className="w-4 h-4 text-white/60" />
                Start Free Course
              </button>
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: CheckCircle2, label: "Lifetime Access" },
                { icon: CheckCircle2, label: "Personal Mentor" },
                { icon: CheckCircle2, label: "Proven Strategies" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <item.icon className="w-4 h-4" style={{ color: "#4ade80" }} />
                  <span className="text-white/50 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
                }}
              />
              <img
                src="/hero-trader.png"
                alt="Trading mentor"
                className="relative z-10 w-full max-w-md rounded-2xl"
                style={{
                  filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl grid grid-cols-2 md:grid-cols-4"
          style={{
            ...glassCard,
          }}
        >
          {[
            { value: "800+", label: "Students Trained", icon: Users, color: "#06b6d4" },
            { value: "80%+", label: "Win Rate", icon: Target, color: "#4ade80" },
            { value: "450+", label: "Live Sessions", icon: Radio, color: "#fbbf24" },
            { value: "9+", label: "Years Experience", icon: Clock, color: "#a78bfa" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              className="flex flex-col items-center py-6 px-4"
              style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <stat.icon className="w-5 h-5 mb-2" style={{ color: stat.color }} />
              <span className="text-white font-black text-2xl tracking-tight" style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className="text-white/35 text-[11px] font-medium mt-0.5">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───── Features Grid ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            Why Choose{" "}
            <span style={{ color: "#fcd34d" }}>Dr. Grand</span>
            ?
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Everything you need to become a profitable trader, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Crown,
              title: "Expert Mentorship",
              desc: "1-on-1 personal guidance from experienced traders who have been in the market for 9+ years.",
              gradient: "linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.08) 100%)",
              iconBg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              iconShadow: "0 4px 16px rgba(245,158,11,0.40)",
              borderColor: "rgba(250,204,21,0.15)",
              titleColor: "#fcd34d",
            },
            {
              icon: BarChart3,
              title: "Trading Journal",
              desc: "Track every trade, analyze patterns, and improve your performance with our advanced journal app.",
              gradient: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(14,116,144,0.08) 100%)",
              iconBg: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
              iconShadow: "0 4px 16px rgba(6,182,212,0.40)",
              borderColor: "rgba(6,182,212,0.15)",
              titleColor: "#67e8f9",
            },
            {
              icon: Shield,
              title: "Proven Strategies",
              desc: "Battle-tested strategies with 80%+ win rate. Learn risk management and consistent profitability.",
              gradient: "linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.08) 100%)",
              iconBg: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              iconShadow: "0 4px 16px rgba(34,197,94,0.40)",
              borderColor: "rgba(34,197,94,0.15)",
              titleColor: "#4ade80",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden"
              style={{
                ...glassCard,
                border: `1px solid ${feature.borderColor}`,
              }}
            >
              <div className="p-5" style={{ background: feature.gradient }}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: feature.iconBg,
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: feature.iconShadow,
                  }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: feature.titleColor }}>
                  {feature.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-3xl overflow-hidden text-center py-12 px-6"
          style={{
            ...glassCard,
            border: "1px solid rgba(250,204,21,0.15)",
            boxShadow: "0 8px 64px rgba(234,179,8,0.12), inset 0 1px 0 rgba(250,204,21,0.10)",
            background: "linear-gradient(135deg, rgba(250,204,21,0.08) 0%, rgba(234,179,8,0.04) 50%, rgba(255,255,255,0.04) 100%)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 4px 20px rgba(245,158,11,0.40)",
            }}
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            Ready to Start{" "}
            <span style={{ color: "#fcd34d" }}>Trading</span>
            ?
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
            Join 800+ successful traders who transformed their financial future with our proven system.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              className="px-8 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)",
                border: "1px solid rgba(255,255,255,0.20)",
                color: "white",
                boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
              }}
            >
              <Crown className="w-4 h-4" />
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-8">
        <div
          className="pt-6 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.70) 0%, rgba(220,38,38,0.80) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white/30 text-xs font-medium">Dr. Grand Trading</span>
          </div>
          <span className="text-white/20 text-[10px]">
            &copy; 2025 All rights reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
