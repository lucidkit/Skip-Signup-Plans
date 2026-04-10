import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, Check } from "lucide-react";

const plans = [
  {
    id: "3month",
    label: "3 MONTHS",
    perMonth: "$49.00",
    original: "$199",
    sale: "$147",
    save: "$52",
    saveAmount: 52,
    popular: false,
  },
  {
    id: "6month",
    label: "6 MONTHS",
    perMonth: "$39.83",
    original: "$399",
    sale: "$239",
    save: "$160",
    saveAmount: 160,
    popular: false,
  },
  {
    id: "9month",
    label: "9 MONTHS",
    perMonth: "$29.88",
    original: "$599",
    sale: "$269",
    save: "$330",
    saveAmount: 330,
    popular: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 280,
      damping: 24,
    },
  }),
};

export default function PricingPage() {
  const [showPlans, setShowPlans] = useState(false);
  const [selected, setSelected] = useState("9month");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1b2e] px-4">
      <AnimatePresence mode="wait">
        {!showPlans ? (
          <motion.div
            key="cta"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[#8ba3c0] text-xs tracking-widest uppercase font-semibold"
            >
              No account needed
            </motion.p>

            <motion.button
              onClick={() => setShowPlans(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-12 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl"
              style={{ minWidth: "320px" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4f6ef7] via-[#7c3aed] to-[#db2777]" />
              <span className="absolute inset-[2px] rounded-xl bg-[#0d1b2e]/70 backdrop-blur-sm" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                I rather not create account
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#4a6280] text-xs"
            >
              Browse available plans below
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="plans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            <div className="bg-[#0f2236] rounded-2xl overflow-hidden shadow-2xl border border-[#1c3352]">
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#1c3352]">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#4f6ef7]" fill="#4f6ef7" />
                  <span className="text-white font-bold text-base">Pro Subscription</span>
                </div>
                <button
                  onClick={() => setShowPlans(false)}
                  className="text-[#4a6280] hover:text-white transition-colors duration-150 p-1 rounded-lg hover:bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="px-5 py-3 text-[#8ba3c0] text-xs">
                Access all premium features without creating an account. Higher pricing applies.
              </p>

              <div className="px-5 pb-2 flex flex-col gap-3">
                {plans.map((plan, i) => {
                  const isSelected = selected === plan.id;
                  return (
                    <motion.button
                      key={plan.id}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      onClick={() => setSelected(plan.id)}
                      className={`relative w-full text-left rounded-xl border-2 transition-all duration-200 overflow-hidden ${
                        isSelected
                          ? "border-[#4f6ef7] bg-[#162b45]"
                          : "border-[#1c3352] bg-[#111e2e] hover:border-[#253f5e]"
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute top-0 right-0 bg-[#4f6ef7] text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg tracking-wider">
                          BEST VALUE
                        </span>
                      )}

                      <div className="flex items-center justify-between px-4 py-3.5">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[#8ba3c0] text-[10px] font-bold tracking-widest uppercase">
                            {plan.label}
                          </span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-white text-xl font-extrabold">{plan.perMonth}</span>
                            <span className="text-[#4a6280] text-xs">/mo</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#4a6280] text-xs line-through">{plan.original}</span>
                            <span className="text-white text-xs font-bold">{plan.sale}</span>
                            <span className="bg-[#1a3a28] text-[#34d399] text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                              Save {plan.save}
                            </span>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isSelected ? "border-[#4f6ef7] bg-[#4f6ef7]" : "border-[#2a4a6e] bg-transparent"
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="px-5 pt-3 pb-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] shadow-lg shadow-indigo-900/30 transition-all duration-200"
                >
                  Continue to Payment
                </motion.button>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <svg className="w-3 h-3 text-[#4a6280]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4a6280] text-[11px]">Secure checkout · Cancel anytime</span>
                </div>
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setShowPlans(false)}
              className="w-full text-center mt-3 text-[#4a6280] hover:text-[#8ba3c0] text-xs transition-colors duration-200"
            >
              ← Go back
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
