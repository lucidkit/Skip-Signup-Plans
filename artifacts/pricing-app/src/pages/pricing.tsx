import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, ExternalLink, Sparkles, ChevronDown, Lock, CheckCircle2, XCircle, AlertCircle, ShieldAlert } from "lucide-react";

type VerifyResult = "success" | "error" | "no_deposit" | "no_verification";

async function verifyAccountUID(uid: string): Promise<{ status: VerifyResult }> {
  if (uid === "111") return { status: "success" };
  if (uid === "222") return { status: "error" };
  if (uid === "333") return { status: "no_deposit" };
  if (uid === "444") return { status: "no_verification" };
  return { status: "error" };
}

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
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "checking" | VerifyResult>("idle");
  const [showUidTooltip, setShowUidTooltip] = useState(false);

  const handleSubmit = async () => {
    if (!accountId.trim() || status === "checking") return;
    setStatus("checking");
    setProgress(0);

    setTimeout(() => setProgress(80), 30);

    const fillDone = 30 + 150 + 400;
    setTimeout(() => setProgress(100), 30 + 150);

    setTimeout(async () => {
      const result = await verifyAccountUID(accountId.trim());
      setStatus(result.status);
    }, fillDone);
  };

  const handleRetry = () => {
    setStatus("idle");
    setProgress(0);
    setAccountId("");
  };
  const plansRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleTogglePlans = () => {
    const opening = !showPlans;
    setShowPlans(opening);
    if (opening) {
      setTimeout(() => {
        plansRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 520);
    } else {
      const el = document.scrollingElement || document.documentElement || document.body;
      el.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen flex items-start justify-center pt-10 pb-24 px-4"
      style={{
        background: "#0e1338",
      }}
    >
      <AnimatePresence>
        {showUidTooltip && (
          <motion.div
            key="uid-tooltip"
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ pointerEvents: "none", width: "min(480px, 92vw)" }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.10)",
              }}
            >
              <img
                src="/uid-sample.png"
                alt="Where to find your UID"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <p className="text-center text-[#6b7280] text-[11px] mt-2">Your UID is shown in your profile</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-lg flex flex-col gap-0 z-10">

        <div ref={topRef} className="flex items-center gap-2 mb-6 px-1">
          <Sparkles className="w-4 h-4" style={{ color: "#4da7cc" }} />
          <span className="text-white font-semibold text-base tracking-tight">Pro Access</span>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div
            className="px-6 py-5"
            style={{
              background: "linear-gradient(135deg, rgba(77,167,204,0.20) 0%, rgba(53,122,153,0.12) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold text-xl tracking-tight leading-tight whitespace-nowrap">Get Pro Journal (Full Version)</span>
                </div>
                <p className="text-[#9ca3af] text-xs mt-1 font-medium">No Payment Required!</p>
              </div>
            </div>
          </div>

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
                    background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  {step.input ? (
                    <span className="text-[#b8bcc8] text-sm leading-snug">
                      Enter your account UID below{" "}
                      <button
                        onMouseEnter={() => setShowUidTooltip(true)}
                        onMouseLeave={() => setShowUidTooltip(false)}
                        onClick={() => setShowUidTooltip(v => !v)}
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-black align-middle select-none"
                        style={{
                          background: "rgba(77,167,204,0.25)",
                          border: "1px solid rgba(77,167,204,0.4)",
                          color: "#65d1cc",
                          lineHeight: 1,
                          cursor: "default",
                        }}
                      >
                        !
                      </button>
                    </span>
                  ) : (
                    <span className="text-[#b8bcc8] text-sm leading-snug">{step.label}</span>
                  )}
                  {step.action && (
                    <a
                      href={step.action.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 w-fit"
                      style={{ color: "#398ffc" }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {step.action.text}
                    </a>
                  )}
                  {step.input && (
                    <div className="flex flex-col gap-2 mt-1">

                      <AnimatePresence initial={false}>
                        {(status === "idle" || status === "checking") && (
                          <motion.div
                            key="input-row"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex gap-2"
                          >
                            <input
                              type="text"
                              placeholder="Your Pocket Option UID"
                              value={accountId}
                              onChange={(e) => setAccountId(e.target.value)}
                              disabled={status === "checking"}
                              className="min-w-0 flex-1 rounded-xl px-3 py-2.5 text-white text-sm outline-none transition-all duration-200 placeholder:text-[#6b7280]"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.10)",
                                opacity: status === "checking" ? 0.5 : 1,
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.border = "1px solid rgba(77,167,204,0.45)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                              }}
                            />
                            <button
                              onClick={handleSubmit}
                              disabled={status === "checking"}
                              className="flex-shrink-0 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-opacity duration-150"
                              style={{
                                background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                opacity: status === "checking" ? 0.5 : 1,
                              }}
                            >
                              {status === "checking" ? "Checking..." : "Submit"}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {status === "checking" && (
                          <motion.div
                            key="progress"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-1.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[#9ca3af] text-[11px] font-medium">Checking your account...</span>
                              <span className="text-[#4da7cc] text-[11px] font-bold tabular-nums">{progress}%</span>
                            </div>
                            <div
                              className="w-full rounded-full overflow-hidden"
                              style={{ height: "5px", background: "rgba(255,255,255,0.07)" }}
                            >
                              <div
                                style={{
                                  height: "100%",
                                  width: `${progress}%`,
                                  background: "linear-gradient(90deg, #4da7cc, #65d1cc)",
                                  borderRadius: "9999px",
                                  transition: progress <= 80
                                    ? "width 0.38s cubic-bezier(0.16,1,0.3,1)"
                                    : "width 0.42s cubic-bezier(0.16,1,0.3,1)",
                                }}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {status === "success" && (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-xl px-4 py-4 flex flex-col gap-2"
                            style={{
                              background: "rgba(44,217,123,0.10)",
                              border: "1px solid rgba(44,217,123,0.30)",
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#2cd97b" }} />
                              <span className="font-bold text-sm" style={{ color: "#2cd97b" }}>Account confirmed!</span>
                            </div>
                            <p className="text-[#9ca3af] text-xs leading-relaxed">
                              Your account has been verified, use the button below to activate your Grand Pro Journal (Full Version)
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {status === "error" && (
                          <motion.div
                            key="error"
                            initial={{ opacity: 0, scale: 0.95, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-xl px-4 py-4 flex flex-col gap-2"
                            style={{
                              background: "rgba(239,68,68,0.08)",
                              border: "1px solid rgba(239,68,68,0.25)",
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <XCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#EF4444" }} />
                              <span className="font-bold text-sm" style={{ color: "#EF4444" }}>Account not found</span>
                            </div>
                            <p className="text-[#9ca3af] text-xs leading-relaxed">
                              This account was not registered through the correct link. Log out of your current Pocket Option account, close the tab, then use the link in Step 1 to create a new one.
                            </p>
                            <div className="flex gap-2 mt-1">
                              <button
                                onClick={handleRetry}
                                className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
                                style={{
                                  background: "rgba(239,68,68,0.15)",
                                  border: "1px solid rgba(239,68,68,0.20)",
                                  color: "#EF4444",
                                }}
                              >
                                Try Again
                              </button>
                              <button
                                className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
                                style={{
                                  background: "rgba(77,167,204,0.10)",
                                  border: "1px solid rgba(77,167,204,0.22)",
                                  color: "#4da7cc",
                                }}
                              >
                                Instructions
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {status === "no_deposit" && (
                          <motion.div
                            key="no-deposit"
                            initial={{ opacity: 0, scale: 0.95, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-xl px-4 py-4 flex flex-col gap-2"
                            style={{
                              background: "rgba(245,158,11,0.08)",
                              border: "1px solid rgba(245,158,11,0.25)",
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#F59E0B" }} />
                              <span className="font-bold text-sm" style={{ color: "#F59E0B" }}>Account found — deposit required</span>
                            </div>
                            <p className="text-[#9ca3af] text-xs leading-relaxed">
                              Your account is correct, but no deposit was detected. Please deposit the required amount and try again.
                            </p>
                            <button
                              onClick={handleRetry}
                              className="mt-1 w-full py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
                              style={{
                                background: "rgba(245,158,11,0.12)",
                                border: "1px solid rgba(245,158,11,0.20)",
                                color: "#F59E0B",
                              }}
                            >
                              Try Again
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {status === "no_verification" && (
                          <motion.div
                            key="no-verification"
                            initial={{ opacity: 0, scale: 0.95, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-xl px-4 py-4 flex flex-col gap-2"
                            style={{
                              background: "rgba(77,167,204,0.08)",
                              border: "1px solid rgba(77,167,204,0.25)",
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <ShieldAlert className="w-5 h-5 flex-shrink-0" style={{ color: "#4da7cc" }} />
                              <span className="font-bold text-sm" style={{ color: "#4da7cc" }}>Almost there — verification needed</span>
                            </div>
                            <p className="text-[#9ca3af] text-xs leading-relaxed">
                              The only thing you lack is the verification. Please complete your account verification on Pocket Option and try again.
                            </p>
                            <button
                              onClick={handleRetry}
                              className="mt-1 w-full py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
                              style={{
                                background: "rgba(77,167,204,0.12)",
                                border: "1px solid rgba(77,167,204,0.20)",
                                color: "#4da7cc",
                              }}
                            >
                              Try Again
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="px-6 pb-6">
            <motion.button
              whileHover={{ scale: 1.02, opacity: 0.95 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl font-bold text-white text-base tracking-wide transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Activate Pro Version
            </motion.button>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <Lock className="w-3 h-3 text-[#6b7280]" />
              <span className="text-[#6b7280] text-[11px]">Secure · No payment needed</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2 my-5">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.10)" }} />
          <span className="text-[#6b7280] text-xs font-medium tracking-widest uppercase">or</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.10)" }} />
        </div>

        <div ref={accordionRef} className="flex flex-col items-center gap-2">
          <motion.button
            onClick={handleTogglePlans}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between px-6 py-4 rounded-xl text-[#9ca3af] hover:text-[#b8bcc8] transition-all duration-200 text-sm font-medium"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.10)",
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
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  className="px-5 pt-4 pb-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <p className="text-[#4da7cc] text-xs font-semibold tracking-widest uppercase">Select a plan</p>
                  <p className="text-[#6b7280] text-[11px] mt-0.5">Immediate access · No account required</p>
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
                        className="relative w-full text-left rounded-xl transition-all duration-200 overflow-hidden"
                        style={{
                          background: isSelected
                            ? "rgba(77,167,204,0.12)"
                            : "rgba(255,255,255,0.03)",
                          border: isSelected
                            ? "1.5px solid rgba(77,167,204,0.45)"
                            : "1.5px solid rgba(255,255,255,0.10)",
                        }}
                      >
                        {plan.best && (
                          <span
                            className="absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider"
                            style={{
                              background: "linear-gradient(135deg, #4da7cc, #357a99)",
                            }}
                          >
                            BEST VALUE
                          </span>
                        )}
                        <div className="flex items-center justify-between px-4 py-4">
                          <div>
                            <span className="text-[#9ca3af] text-[10px] font-bold tracking-widest uppercase block mb-1">
                              {plan.label}
                            </span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-white text-2xl font-extrabold">{plan.perMonth}</span>
                              <span className="text-[#6b7280] text-xs">/mo</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-[#6b7280] text-xs line-through">{plan.original}</span>
                              <span className="text-[#b8bcc8] text-xs font-semibold">{plan.sale}</span>
                              <span
                                className="text-[10px] font-bold px-1.5 py-0.5 rounded-lg"
                                style={{
                                  background: "rgba(77,167,204,0.12)",
                                  border: "1px solid rgba(77,167,204,0.22)",
                                  color: "#4da7cc",
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
                                ? "linear-gradient(135deg, #4da7cc, #65d1cc)"
                                : "transparent",
                              border: isSelected
                                ? "1.5px solid rgba(77,167,204,0.8)"
                                : "1.5px solid rgba(255,255,255,0.10)",
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
                    className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #4da7cc, #65d1cc)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    Continue to Payment
                  </motion.button>
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <Lock className="w-3 h-3 text-[#6b7280]" />
                    <span className="text-[#6b7280] text-[11px]">Secure crypto payment via NOWPayments</span>
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
