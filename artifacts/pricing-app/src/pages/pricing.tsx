import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, ExternalLink, Sparkles, ChevronDown, Lock } from "lucide-react";

const plans = [
  {
    id: "3month",
    label: "3 MONTHS",
    perMonth: "$49.00",
    original: "$199",
    sale: "$147",
    save: "$52",
  },
  {
    id: "6month",
    label: "6 MONTHS",
    perMonth: "$39.83",
    original: "$399",
    sale: "$239",
    save: "$160",
  },
  {
    id: "9month",
    label: "9 MONTHS",
    perMonth: "$29.88",
    original: "$599",
    sale: "$269",
    save: "$330",
    best: true,
  },
];

const steps = [
  {
    num: 1,
    label: "Create your Main Pocket Option account using the link below (Close/delete your existing account if you have any)",
    action: { text: "Open Pocket Option", href: "#" },
  },
  {
    num: 2,
    label: "Verify your account and make a deposit",
    action: null,
  },
  {
    num: 3,
    label: "Enter your account UID below",
    action: null,
    input: true,
  },
];

export default function PricingPage() {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("9month");
  const [accountId, setAccountId] = useState("");
  const plansRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleTogglePlans = () => {
    const opening = !showPlans;
    setShowPlans(opening);
    if (opening) {
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } else {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen flex items-start justify-center pt-10 pb-24 px-4"
      style={{
        background: "radial-gradient(ellipse at 30% 0%, #0c1e3d 0%, #07111f 55%, #030810 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-700/8 blur-[110px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-indigo-800/10 blur-[90px]" />
      </div>

      <div className="relative w-full max-w-lg flex flex-col gap-0 z-10">

        {/* Header */}
        <div ref={topRef} className="flex items-center gap-2 mb-6 px-1">
          <Sparkles className="w-4 h-4 text-blue-300/80" />
          <span className="text-white/90 font-semibold text-base tracking-tight">Pro Access</span>
        </div>

        {/* ───── FREE PRO SECTION (HERO) ───── */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 64px rgba(30,80,200,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          {/* Top banner */}
          <div
            className="px-6 py-5"
            style={{
              background: "linear-gradient(135deg, rgba(29,78,216,0.30) 0%, rgba(14,52,145,0.18) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(96,165,250,0.45) 0%, rgba(59,130,246,0.55) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
                }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold text-xl tracking-tight leading-tight whitespace-nowrap">Get Pro Journal (Full Version)</span>
                </div>
                <p className="text-blue-300/55 text-xs mt-1 font-medium">No Payment Required !</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="px-6 py-6 flex flex-col gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex gap-4"
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    background: "linear-gradient(135deg, rgba(96,165,250,0.55) 0%, rgba(59,130,246,0.65) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 2px 12px rgba(59,130,246,0.35)",
                  }}
                >
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-white/80 text-sm leading-snug">{step.label}</span>
                  {step.action && (
                    <a
                      href={step.action.href}
                      className="inline-flex items-center gap-1.5 text-blue-300 hover:text-blue-200 text-sm font-semibold transition-colors duration-150 w-fit"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {step.action.text}
                    </a>
                  )}
                  {step.input && (
                    <div className="flex gap-2 mt-1">
                      <input
                        type="text"
                        placeholder="Your Pocket Option UID"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        className="min-w-0 flex-1 rounded-xl px-3 py-2.5 text-white text-sm outline-none transition-all duration-200 placeholder:text-white/20"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          backdropFilter: "blur(20px)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.border = "1px solid rgba(96,165,250,0.45)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        }}
                      />
                      <button
                        className="flex-shrink-0 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity duration-150"
                        style={{
                          background: "linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(29,78,216,0.9) 100%)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          boxShadow: "0 4px 16px rgba(59,130,246,0.25)",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-6 pb-6">
            <motion.button
              whileHover={{ scale: 1.02, opacity: 0.95 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-2xl font-bold text-white text-base tracking-wide transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 50%, #0369a1 100%)",
                boxShadow: "0 8px 32px rgba(6,182,212,0.30), inset 0 1px 0 rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Activate Pro Version
            </motion.button>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <Lock className="w-3 h-3 text-white/18" />
              <span className="text-white/22 text-[11px]">Secure · No payment needed</span>
            </div>
          </div>
        </div>

        {/* ───── DIVIDER ───── */}
        <div className="flex items-center gap-3 px-2 my-5">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-white/18 text-xs font-medium tracking-widest uppercase">or</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* ───── "I RATHER NOT" BUTTON ───── */}
        <div ref={accordionRef} className="flex flex-col items-center gap-2">
          <motion.button
            onClick={handleTogglePlans}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-white/35 hover:text-white/55 transition-all duration-200 text-sm font-medium"
            style={{
              background: "rgba(255,255,255,0.025)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span>I rather not create an account</span>
            <motion.span
              animate={{ rotate: showPlans ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>

        {/* ───── PLANS SLIDE DOWN ───── */}
        <AnimatePresence initial={false}>
          {showPlans && (
            <motion.div
              key="plans"
              ref={plansRef}
              initial={{ opacity: 0, height: 0, marginTop: 0, y: -8 }}
              animate={{
                opacity: 1, height: "auto", marginTop: 16, y: 0,
                transition: {
                  height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.35, ease: "easeOut" },
                  marginTop: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              exit={{
                opacity: 0, height: 0, marginTop: 0, y: -8,
                transition: {
                  height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.35, ease: "easeOut" },
                  marginTop: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="overflow-hidden"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(40px) saturate(180%)",
                  WebkitBackdropFilter: "blur(40px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 48px rgba(20,60,160,0.15)",
                }}
              >
                <div
                  className="px-5 pt-4 pb-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-blue-300/45 text-xs font-semibold tracking-widest uppercase">Select a plan</p>
                  <p className="text-white/18 text-[11px] mt-0.5">Immediate access · No account required</p>
                </div>

                <div className="px-4 py-4 flex flex-col gap-3">
                  {plans.map((plan, i) => {
                    const isSelected = selectedPlan === plan.id;
                    return (
                      <motion.button
                        key={plan.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{
                          delay: i * 0.07,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        onClick={() => setSelectedPlan(plan.id)}
                        className="relative w-full text-left rounded-2xl transition-all duration-200 overflow-hidden"
                        style={{
                          background: isSelected
                            ? "rgba(59,130,246,0.12)"
                            : "rgba(255,255,255,0.03)",
                          border: isSelected
                            ? "1.5px solid rgba(96,165,250,0.45)"
                            : "1.5px solid rgba(255,255,255,0.06)",
                          boxShadow: isSelected ? "0 4px 24px rgba(59,130,246,0.12)" : "none",
                        }}
                      >
                        {plan.best && (
                          <span
                            className="absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider"
                            style={{
                              background: "linear-gradient(135deg, rgba(59,130,246,0.75), rgba(29,78,216,0.85))",
                            }}
                          >
                            BEST VALUE
                          </span>
                        )}
                        <div className="flex items-center justify-between px-4 py-4">
                          <div>
                            <span className="text-blue-300/40 text-[10px] font-bold tracking-widest uppercase block mb-1">
                              {plan.label}
                            </span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-white text-2xl font-extrabold">{plan.perMonth}</span>
                              <span className="text-white/28 text-xs">/mo</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-white/22 text-xs line-through">{plan.original}</span>
                              <span className="text-white/65 text-xs font-semibold">{plan.sale}</span>
                              <span
                                className="text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                                style={{
                                  background: "rgba(59,130,246,0.12)",
                                  border: "1px solid rgba(96,165,250,0.22)",
                                  color: "#93c5fd",
                                }}
                              >
                                Save {plan.save}
                              </span>
                            </div>
                          </div>
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                            style={{
                              background: isSelected
                                ? "linear-gradient(135deg, #60a5fa, #2563eb)"
                                : "transparent",
                              border: isSelected
                                ? "1.5px solid rgba(96,165,250,0.8)"
                                : "1.5px solid rgba(255,255,255,0.12)",
                              boxShadow: isSelected ? "0 2px 10px rgba(59,130,246,0.35)" : "none",
                            }}
                          >
                            {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="px-4 pb-5">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02, opacity: 0.95 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-2xl font-bold text-white text-sm transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 50%, #0369a1 100%)",
                      boxShadow: "0 6px 24px rgba(6,182,212,0.25), inset 0 1px 0 rgba(255,255,255,0.18)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    Continue to Payment
                  </motion.button>
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <Lock className="w-3 h-3 text-white/14" />
                    <span className="text-white/18 text-[11px]">Secure crypto payment via NOWPayments</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
