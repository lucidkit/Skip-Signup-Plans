import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Star, Zap } from "lucide-react";

const plans = [
  {
    id: "3month",
    duration: "3 Months",
    price: "$9.99",
    perMonth: "$9.99/mo",
    badge: null,
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    borderColor: "border-violet-200",
    accentColor: "text-violet-600",
    bgLight: "bg-violet-50",
    features: [
      "Full access to all features",
      "Up to 5 projects",
      "10 GB storage",
      "Email support",
      "Weekly updates",
    ],
  },
  {
    id: "6month",
    duration: "6 Months",
    price: "$7.99",
    perMonth: "$7.99/mo",
    badge: "Most Popular",
    icon: Star,
    color: "from-rose-500 to-pink-600",
    borderColor: "border-rose-300",
    accentColor: "text-rose-600",
    bgLight: "bg-rose-50",
    features: [
      "Everything in 3-month plan",
      "Unlimited projects",
      "50 GB storage",
      "Priority support",
      "Daily updates",
      "Advanced analytics",
    ],
  },
  {
    id: "9month",
    duration: "9 Months",
    price: "$5.99",
    perMonth: "$5.99/mo",
    badge: "Best Value",
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-200",
    accentColor: "text-amber-600",
    bgLight: "bg-amber-50",
    features: [
      "Everything in 6-month plan",
      "Unlimited storage",
      "Dedicated support",
      "Early feature access",
      "Custom integrations",
      "Team collaboration",
      "Monthly reports",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PricingPage() {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-rose-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <AnimatePresence mode="wait">
          {!showPlans ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-400 text-sm tracking-widest uppercase font-medium"
              >
                No commitment required
              </motion.p>

              <motion.button
                onClick={() => setShowPlans(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative group px-12 py-7 text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl"
                style={{ minWidth: "340px" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 transition-all duration-300 group-hover:opacity-90" />
                <span className="absolute inset-[2px] rounded-xl bg-slate-900/60 backdrop-blur-sm" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  I rather not create account
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <span className="absolute inset-0 rounded-2xl ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300" />
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-slate-500 text-sm"
              >
                Choose a plan that works for you
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="plans"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full flex flex-col items-center gap-10"
            >
              <motion.div variants={titleVariants} className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                  Pick your plan
                </h1>
                <p className="text-slate-400 text-lg">
                  Simple, transparent pricing. Cancel anytime.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  const isSelected = selectedPlan === plan.id;
                  const isPopular = plan.badge === "Most Popular";

                  return (
                    <motion.div
                      key={plan.id}
                      variants={cardVariants}
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`relative rounded-2xl cursor-pointer border-2 transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? `${plan.borderColor} shadow-2xl shadow-white/5`
                          : "border-slate-700 hover:border-slate-500"
                      } ${isPopular ? "md:-mt-4 md:mb-4" : ""}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 transition-opacity duration-300 ${isSelected ? "opacity-5" : "group-hover:opacity-5"}`} />

                      <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-7 h-full flex flex-col">
                        {plan.badge && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${plan.color} shadow-lg`}
                          >
                            {plan.badge}
                          </motion.div>
                        )}

                        <div className="flex items-center gap-3 mb-5 mt-2">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h2 className="text-xl font-bold text-white">{plan.duration}</h2>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-end gap-1">
                            <span className={`text-4xl font-extrabold ${plan.accentColor}`}>
                              {plan.price}
                            </span>
                            <span className="text-slate-400 mb-1 text-sm">/month</span>
                          </div>
                          <p className="text-slate-500 text-sm mt-1">
                            Billed every {plan.id === "3month" ? "3" : plan.id === "6month" ? "6" : "9"} months
                          </p>
                        </div>

                        <ul className="space-y-3 flex-1 mb-6">
                          {plan.features.map((feature, i) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.06 }}
                              className="flex items-start gap-3 text-sm text-slate-300"
                            >
                              <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                                <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                              </span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                            isSelected
                              ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                          }`}
                        >
                          {isSelected ? "Selected" : "Select Plan"}
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <AnimatePresence>
                {selectedPlan && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-10 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 shadow-xl"
                    >
                      Continue with {plans.find((p) => p.id === selectedPlan)?.duration} Plan
                    </motion.button>
                    <button
                      onClick={() => setSelectedPlan(null)}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      Clear selection
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                variants={titleVariants}
                onClick={() => {
                  setShowPlans(false);
                  setSelectedPlan(null);
                }}
                className="text-slate-600 hover:text-slate-400 text-sm transition-colors duration-200 underline underline-offset-2"
              >
                Go back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
