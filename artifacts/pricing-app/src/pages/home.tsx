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

const solidCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
} as const;

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#0e1338",
      }}
    >

      <nav className="relative z-20">
        <div
          className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight">Dr. Grand</span>
              <span className="text-[#6b7280] text-[10px] block -mt-0.5">Trading</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Mentorship", "Mentors", "Trading Journal", "Competition", "Student Results"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#b8bcc8] hover:text-white text-xs font-medium transition-colors duration-200"
              >
                {item}
                {item === "Trading Journal" && (
                  <span
                    className="ml-1 text-[8px] font-bold px-1.5 py-0.5 rounded align-top"
                    style={{
                      background: "rgba(44,217,123,0.20)",
                      color: "#2cd97b",
                      border: "1px solid rgba(44,217,123,0.30)",
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
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <Users className="w-4 h-4 text-[#9ca3af]" />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 py-2.5"
          >
            <span className="text-xs font-bold" style={{ color: "#2cd97b" }}>FREE</span>
            <span className="text-[#b8bcc8] text-xs">Competition</span>
            <span className="text-white font-bold text-xs tracking-wide">LIVE NOW!</span>
            <button
              className="px-3 py-1 rounded-lg text-[11px] font-semibold transition-all active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              Join Competition
            </button>
          </motion.div>
        </div>
      </nav>

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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-6"
              style={{
                background: "rgba(77,167,204,0.12)",
                border: "1px solid rgba(77,167,204,0.20)",
              }}
            >
              <Star className="w-3.5 h-3.5" style={{ color: "#4da7cc" }} />
              <span className="text-xs font-semibold" style={{ color: "#65d1cc" }}>
                Trusted by 800+ Traders
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
              Master{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Binary Options
              </span>{" "}
              Trading
            </h1>

            <p className="text-[#b8bcc8] text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Join our proven mentorship program and learn to trade profitably with expert guidance, strategies, and a supportive community.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <button
                className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                }}
              >
                Become a Student
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "white",
                }}
              >
                <Play className="w-4 h-4 text-[#9ca3af]" />
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
                  <item.icon className="w-4 h-4" style={{ color: "#2cd97b" }} />
                  <span className="text-[#9ca3af] text-xs font-medium">{item.label}</span>
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
              <img
                src="/hero-trader.png"
                alt="Trading mentor"
                className="relative z-10 w-full max-w-2xl rounded-2xl"
                style={{
                  filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl grid grid-cols-2 md:grid-cols-4"
          style={solidCard}
        >
          {[
            { value: "800+", label: "Students Trained", icon: Users, color: "#4da7cc" },
            { value: "80%+", label: "Win Rate", icon: Target, color: "#2cd97b" },
            { value: "450+", label: "Live Sessions", icon: Radio, color: "#65d1cc" },
            { value: "9+", label: "Years Experience", icon: Clock, color: "#4da7cc" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              className="flex flex-col items-center py-6 px-4"
              style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none",
              }}
            >
              <stat.icon className="w-5 h-5 mb-2" style={{ color: stat.color }} />
              <span className="text-white font-black text-2xl tracking-tight" style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className="text-[#6b7280] text-[11px] font-medium mt-0.5">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            Why Choose{" "}
            <span style={{ color: "#65d1cc" }}>Dr. Grand</span>
            ?
          </h2>
          <p className="text-[#9ca3af] text-sm max-w-md mx-auto">
            Everything you need to become a profitable trader, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Crown,
              title: "Expert Mentorship",
              desc: "1-on-1 personal guidance from experienced traders who have been in the market for 9+ years.",
              gradient: "linear-gradient(135deg, rgba(77,167,204,0.15) 0%, rgba(77,167,204,0.08) 100%)",
              iconBg: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)",
              borderColor: "rgba(77,167,204,0.15)",
              titleColor: "#65d1cc",
            },
            {
              icon: BarChart3,
              title: "Trading Journal",
              desc: "Track every trade, analyze patterns, and improve your performance with our advanced journal app.",
              gradient: "linear-gradient(135deg, rgba(77,167,204,0.15) 0%, rgba(77,167,204,0.08) 100%)",
              iconBg: "linear-gradient(135deg, #4da7cc, #65d1cc)",
              borderColor: "rgba(77,167,204,0.15)",
              titleColor: "#65d1cc",
            },
            {
              icon: Shield,
              title: "Proven Strategies",
              desc: "Battle-tested strategies with 80%+ win rate. Learn risk management and consistent profitability.",
              gradient: "linear-gradient(135deg, rgba(77,167,204,0.15) 0%, rgba(77,167,204,0.08) 100%)",
              iconBg: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)",
              borderColor: "rgba(77,167,204,0.15)",
              titleColor: "#65d1cc",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${feature.borderColor}`,
              }}
            >
              <div className="p-5" style={{ background: feature.gradient }}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: feature.iconBg,
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: feature.titleColor }}>
                  {feature.title}
                </h3>
                <p className="text-[#9ca3af] text-xs leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl overflow-hidden text-center py-12 px-6"
          style={{
            border: "1px solid rgba(77,167,204,0.15)",
            background: "linear-gradient(135deg, rgba(77,167,204,0.08) 0%, rgba(77,167,204,0.04) 50%, rgba(255,255,255,0.04) 100%)",
          }}
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
            style={{
              background: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            Ready to Start{" "}
            <span style={{ color: "#65d1cc" }}>Trading</span>
            ?
          </h2>
          <p className="text-[#9ca3af] text-sm max-w-md mx-auto mb-8">
            Join 800+ successful traders who transformed their financial future with our proven system.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              className="px-8 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                border: "1px solid rgba(255,255,255,0.20)",
                color: "white",
              }}
            >
              <Crown className="w-4 h-4" />
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-8">
        <div
          className="pt-6 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[#6b7280] text-xs font-medium">Dr. Grand Trading</span>
          </div>
          <span className="text-[#6b7280] text-[10px]">
            &copy; 2025 All rights reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
