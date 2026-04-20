import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, X, Minus, Bot, User } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const SUGGESTED = [
  "How do I activate Pro?",
  "What's included in Mentorship?",
  "How does the Trading Journal work?",
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I'm DrGrand Assist. Ask me anything about your trading journey, plans, or how to get started.",
  },
];

export default function DrGrandAssist() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, typing, open, minimized]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: getReply(trimmed),
      };
      setMessages((m) => [...m, reply]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            onClick={() => {
              setOpen(true);
              setMinimized(false);
            }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 pl-3 pr-4 py-3 rounded-full font-semibold text-sm text-white shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 60%, #2cd97b 100%)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 8px 24px rgba(77,167,204,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(135deg, rgba(101,209,204,0.35), transparent 70%)" }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span
              className="relative w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="relative">DrGrand Assist</span>
            <motion.span
              className="relative w-2 h-2 rounded-full"
              style={{ background: "#2cd97b", boxShadow: "0 0 8px #2cd97b" }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: minimized ? 64 : 560,
            }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed bottom-5 right-5 z-50 w-[380px] max-w-[calc(100vw-32px)] rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: "linear-gradient(180deg, #131a47 0%, #0e1338 100%)",
              border: "1px solid rgba(101,209,204,0.20)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px rgba(77,167,204,0.15)",
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(101,209,204,0.18) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(44,217,123,0.10) 0%, transparent 70%)" }}
            />

            <div
              className="relative px-4 py-3 flex items-center justify-between flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(77,167,204,0.18) 0%, rgba(44,217,123,0.08) 100%)",
                borderBottom: "1px solid rgba(101,209,204,0.15)",
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 60%, #2cd97b 100%)",
                    border: "1px solid rgba(255,255,255,0.30)",
                  }}
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                    style={{ background: "#2cd97b", borderColor: "#131a47" }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight leading-none">DrGrand Assist</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2cd97b" }} />
                    <span className="text-[10px] text-[#9ca3af]">Online · AI Trading Coach</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimized((v) => !v)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:bg-white/10 active:scale-90"
                  style={{ color: "#9ca3af" }}
                  aria-label="Minimize"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    setMinimized(false);
                  }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:bg-white/10 active:scale-90"
                  style={{ color: "#9ca3af" }}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {!minimized && (
                <motion.div
                  key="body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex-1 flex flex-col min-h-0"
                >
                  <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(101,209,204,0.3) transparent" }}
                  >
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 320, damping: 24 }}
                        className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: msg.role === "assistant"
                              ? "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)"
                              : "rgba(255,255,255,0.08)",
                            border: msg.role === "assistant"
                              ? "1px solid rgba(255,255,255,0.25)"
                              : "1px solid rgba(255,255,255,0.10)",
                          }}
                        >
                          {msg.role === "assistant" ? (
                            <Bot className="w-3.5 h-3.5 text-white" />
                          ) : (
                            <User className="w-3.5 h-3.5 text-[#b8bcc8]" />
                          )}
                        </div>
                        <div
                          className={`max-w-[78%] px-3.5 py-2.5 text-xs leading-relaxed ${
                            msg.role === "user"
                              ? "rounded-2xl rounded-br-md text-white"
                              : "rounded-2xl rounded-bl-md text-[#e8eaf0]"
                          }`}
                          style={{
                            background: msg.role === "user"
                              ? "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)"
                              : "rgba(255,255,255,0.05)",
                            border: msg.role === "user"
                              ? "1px solid rgba(255,255,255,0.20)"
                              : "1px solid rgba(101,209,204,0.12)",
                          }}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}

                    {typing && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-end gap-2"
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 100%)",
                            border: "1px solid rgba(255,255,255,0.25)",
                          }}
                        >
                          <Bot className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div
                          className="px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(101,209,204,0.12)",
                          }}
                        >
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#65d1cc" }}
                              animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {messages.length <= 1 && !typing && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="pt-2"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-[#6b7280] mb-2 px-1">
                          Suggested questions
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {SUGGESTED.map((q, i) => (
                            <motion.button
                              key={q}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.08 }}
                              onClick={() => send(q)}
                              className="text-left text-xs px-3 py-2.5 rounded-xl text-[#b8bcc8] transition-all hover:text-white active:scale-[0.98]"
                              style={{
                                background: "rgba(101,209,204,0.06)",
                                border: "1px solid rgba(101,209,204,0.15)",
                              }}
                            >
                              {q}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div
                    className="relative flex-shrink-0 px-3 py-3"
                    style={{
                      background: "rgba(14,19,56,0.6)",
                      borderTop: "1px solid rgba(101,209,204,0.12)",
                    }}
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        send(input);
                      }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="flex-1 flex items-center rounded-2xl px-3.5 py-2.5"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(101,209,204,0.18)",
                        }}
                      >
                        <input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask DrGrand anything..."
                          className="flex-1 bg-transparent border-none outline-none text-xs text-white placeholder:text-[#6b7280]"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        disabled={!input.trim()}
                        className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 disabled:opacity-50 transition-opacity"
                        style={{
                          background: "linear-gradient(135deg, #4da7cc 0%, #65d1cc 60%, #2cd97b 100%)",
                          border: "1px solid rgba(255,255,255,0.25)",
                          boxShadow: "0 4px 12px rgba(77,167,204,0.35)",
                        }}
                        aria-label="Send"
                      >
                        <Send className="w-4 h-4 text-white" />
                      </motion.button>
                    </form>
                    <div className="text-[9px] text-[#6b7280] text-center mt-2">
                      Powered by DrGrand AI · Responses are educational, not financial advice
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function getReply(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("pro") && (lower.includes("activate") || lower.includes("unlock") || lower.includes("get"))) {
    return "To activate Pro Journal: 1) Open a Pocket Option account using our link, 2) Verify and make a deposit, 3) Enter your UID on the home page. It's free with that flow!";
  }
  if (lower.includes("mentor")) {
    return "Mentorship gives you a personal 1-on-1 coach, lifetime access to exclusive course videos, and direct support. Plans start from just $2 lifetime.";
  }
  if (lower.includes("journal")) {
    return "The Trading Journal helps you track every trade, mood, and outcome — so you can spot patterns and improve your edge. Pro unlocks advanced analytics & multiple journals.";
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("plan")) {
    return "We have 3, 6, and 9 month plans starting at $29.88/mo. The 9-month is our best value — saves you $330!";
  }
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
    return "Hey there! Great to see you. What can I help you with today — getting started, plans, or features?";
  }
  return "Great question! For detailed help on this, check out our Mentorship section or reach out via the contact options. Anything else I can help with?";
}
