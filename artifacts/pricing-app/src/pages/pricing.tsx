import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Check, ExternalLink, Star, ChevronDown, ChevronUp, Lock } from "lucide-react";

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
    label: "Create a Quotex account using the link below",
    action: { text: "Open Quotex", href: "#" },
  },
  {
    num: 2,
    label: "Verify your account and make a deposit",
    action: null,
  },
  {
    num: 3,
    label: "Enter your Account ID below",
    action: null,
    input: true,
  },
];

export default function PricingPage() {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("9month");
  const [accountId, setAccountId] = useState("");

  return (
    <div className="min-h-screen bg-[#080f1c] flex items-start justify-center pt-10 pb-20 px-4">
      <div className="w-full max-w-lg flex flex-col gap-0">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6 px-1">
          <Star className="w-5 h-5 text-[#4f6ef7]" fill="#4f6ef7" />
          <span className="text-white font-bold text-lg tracking-tight">Pro Access</span>
        </div>

        {/* ───── FREE PRO SECTION (HERO) ───── */}
        <div className="rounded-2xl border-2 border-[#1e3a5f] bg-[#0b1929] overflow-hidden shadow-2xl">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-[#0f3460] via-[#112b50] to-[#0f3460] px-6 py-5 border-b border-[#1e3a5f]">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4f6ef7] to-[#22d3ee] flex items-center justify-center shadow-lg shadow-blue-900/40">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-extrabold text-2xl tracking-tight">Get Pro for</span>
                  <span className="text-2xl font-extrabold bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent">
                    FREE
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="bg-[#4ade80]/20 text-[#4ade80] text-xs font-bold px-2 py-0.5 rounded-full border border-[#4ade80]/30">
                    30 Days Included
                  </span>
                  <span className="text-[#4a7096] text-xs">No credit card required</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="px-6 py-5 flex flex-col gap-5">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] flex items-center justify-center shadow-md shadow-indigo-900/40 mt-0.5">
                  <span className="text-white text-xs font-extrabold">{step.num}</span>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <span className="text-[#c5d8ef] text-sm leading-snug">{step.label}</span>
                  {step.action && (
                    <a
                      href={step.action.href}
                      className="inline-flex items-center gap-1.5 text-[#4f6ef7] hover:text-[#7c9fff] text-sm font-semibold transition-colors duration-150 w-fit"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {step.action.text}
                    </a>
                  )}
                  {step.input && (
                    <div className="flex gap-2 mt-1">
                      <input
                        type="text"
                        placeholder="Enter your Quotex Account ID"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        className="flex-1 bg-[#0d1f35] border border-[#1e3a5f] focus:border-[#4f6ef7] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#2d5070] outline-none transition-colors duration-150"
                      />
                      <button className="bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity duration-150 shadow-lg shadow-indigo-900/30">
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl font-extrabold text-white text-base bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4f6ef7] shadow-xl shadow-emerald-900/20 tracking-wide"
            >
              ✨ Claim My FREE 30 Days
            </motion.button>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <Lock className="w-3 h-3 text-[#2d5070]" />
              <span className="text-[#2d5070] text-[11px]">Secure · No payment needed for free trial</span>
            </div>
          </div>
        </div>

        {/* ───── DIVIDER ───── */}
        <div className="flex items-center gap-3 px-2 my-5">
          <div className="flex-1 h-px bg-[#1a2d42]" />
          <span className="text-[#2d5070] text-xs font-medium tracking-widest uppercase">or</span>
          <div className="flex-1 h-px bg-[#1a2d42]" />
        </div>

        {/* ───── "I RATHER NOT" BUTTON ───── */}
        <div className="flex flex-col items-center gap-2">
          <motion.button
            onClick={() => setShowPlans((v) => !v)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-between px-6 py-4 rounded-xl border border-[#1e3a5f] bg-[#0b1929]/60 text-[#7a9bbf] hover:text-[#a8c4e0] hover:border-[#2a4a6e] transition-all duration-200 text-sm font-medium"
          >
            <span>I rather not create an account</span>
            <motion.span
              animate={{ rotate: showPlans ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </motion.button>
          <p className="text-[#1e3a5f] text-[11px]">Higher pricing applies without an account</p>
        </div>

        {/* ───── PLANS SLIDE DOWN ───── */}
        <AnimatePresence>
          {showPlans && (
            <motion.div
              key="plans"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="rounded-2xl border border-[#1e3a5f] bg-[#0b1929] overflow-hidden">
                <div className="px-5 pt-4 pb-2 border-b border-[#122034]">
                  <p className="text-[#4a7096] text-xs font-medium tracking-widest uppercase">Select a paid plan</p>
                  <p className="text-[#2d5070] text-[11px] mt-0.5">No account required · Immediate access</p>
                </div>

                <div className="px-4 py-4 flex flex-col gap-3">
                  {plans.map((plan, i) => {
                    const isSelected = selectedPlan === plan.id;
                    return (
                      <motion.button
                        key={plan.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 26 }}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`relative w-full text-left rounded-xl border-2 transition-all duration-200 overflow-hidden ${
                          isSelected
                            ? "border-[#4f6ef7] bg-[#0f2040]"
                            : "border-[#122034] bg-[#0b1929] hover:border-[#1e3a5f]"
                        }`}
                      >
                        {plan.best && (
                          <span className="absolute top-0 right-0 bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] text-white text-[10px] font-bold px-2.5 py-1 rounded-bl-xl tracking-wider">
                            BEST VALUE
                          </span>
                        )}
                        <div className="flex items-center justify-between px-4 py-3.5">
                          <div>
                            <span className="text-[#4a7096] text-[10px] font-bold tracking-widest uppercase block mb-1">
                              {plan.label}
                            </span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-white text-2xl font-extrabold">{plan.perMonth}</span>
                              <span className="text-[#2d5070] text-xs">/mo</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[#2d5070] text-xs line-through">{plan.original}</span>
                              <span className="text-[#c5d8ef] text-xs font-bold">{plan.sale}</span>
                              <span className="bg-[#0d2d1a] text-[#4ade80] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#4ade80]/20">
                                Save {plan.save}
                              </span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                            isSelected ? "border-[#4f6ef7] bg-[#4f6ef7]" : "border-[#1e3a5f]"
                          }`}>
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
                    transition={{ delay: 0.35 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] shadow-lg shadow-indigo-900/30"
                  >
                    Continue to Payment
                  </motion.button>
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <Lock className="w-3 h-3 text-[#2d5070]" />
                    <span className="text-[#2d5070] text-[11px]">Secure crypto payment via NOWPayments</span>
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
