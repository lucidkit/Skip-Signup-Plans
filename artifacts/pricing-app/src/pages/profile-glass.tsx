import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Globe,
  Hash,
  BookOpen,
  Crown,
  GraduationCap,
  Image as ImageIcon,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Lock,
  BarChart3,
  Layers,
  Camera,
  FileText,
  Play,
  Star,
} from "lucide-react";

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "0 8px 64px rgba(30,80,200,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
} as const;

const glassBannerGradient =
  "linear-gradient(135deg, rgba(29,78,216,0.30) 0%, rgba(14,52,145,0.18) 100%)";

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(20px)",
} as const;

function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage >= 80) return { start: "#34d399", end: "#06b6d4" };
    if (percentage >= 50) return { start: "#06b6d4", end: "#3b82f6" };
    if (percentage >= 30) return { start: "#f59e0b", end: "#06b6d4" };
    return { start: "#f87171", end: "#f59e0b" };
  };
  const color = getColor();
  const gradId = "progress-grad";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color.start} />
            <stop offset="100%" stopColor={color.end} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-xl font-bold text-white"
          key={percentage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {percentage}%
        </motion.span>
        <span className="text-[9px] text-white/40 font-medium tracking-wide uppercase">
          Complete
        </span>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "Mohsen Yaghoobi",
    email: "mohsen.yg2015@gmail.com",
    phone: "",
    website: "",
    uid: "",
    avatarUrl: "",
  });

  const updateField = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const completionPercentage = useMemo(() => {
    const fields = [
      { value: profile.fullName, weight: 20 },
      { value: profile.email, weight: 20 },
      { value: profile.phone, weight: 15 },
      { value: profile.website, weight: 15 },
      { value: profile.uid, weight: 20 },
      { value: profile.avatarUrl, weight: 10 },
    ];
    return fields.reduce((sum, f) => sum + (f.value.trim() ? f.weight : 0), 0);
  }, [profile]);

  const initials = profile.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const completionItems = [
    { label: "Name", done: !!profile.fullName.trim() },
    { label: "Email", done: !!profile.email.trim() },
    { label: "Phone", done: !!profile.phone.trim() },
    { label: "Website", done: !!profile.website.trim() },
    { label: "UID", done: !!profile.uid.trim() },
    { label: "Avatar", done: !!profile.avatarUrl.trim() },
  ];

  return (
    <div
      className="min-h-screen px-4 py-8 md:px-8 md:py-10"
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

      <div className="relative w-full max-w-5xl mx-auto z-10 flex flex-col gap-4">

        {/* ───── Profile Header (full width) ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden"
          style={glassCard}
        >
          <div
            className="px-6 py-5"
            style={{
              background: glassBannerGradient,
            }}
          >
            <div className="flex items-center gap-5">
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(96,165,250,0.45) 0%, rgba(59,130,246,0.55) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
                  }}
                >
                  {initials}
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full"
                  style={{
                    background: "#22c55e",
                    border: "2px solid #0c1e3d",
                    boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-white font-bold text-lg tracking-tight truncate">
                    {profile.fullName || "Your Name"}
                  </h1>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full tracking-wide"
                    style={{
                      background: "rgba(250,204,21,0.18)",
                      color: "#facc15",
                      border: "1px solid rgba(250,204,21,0.25)",
                    }}
                  >
                    Member
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Mail className="w-3 h-3 text-white/35" />
                  <span className="text-white/50 text-xs truncate">
                    {profile.email || "your@email.com"}
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-5 ml-auto">
                <CircularProgress percentage={completionPercentage} size={72} strokeWidth={5} />
                <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                  {completionItems.map((item) => (
                    <span
                      key={item.label}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{
                        background: item.done ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.05)",
                        color: item.done ? "#4ade80" : "rgba(255,255,255,0.30)",
                        border: `1px solid ${item.done ? "rgba(34,197,94,0.25)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {item.done && <CheckCircle2 className="w-2.5 h-2.5" />}
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <CircularProgress percentage={completionPercentage} size={64} strokeWidth={5} />
              <div className="flex flex-wrap gap-1.5 flex-1">
                {completionItems.map((item) => (
                  <span
                    key={item.label}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1"
                    style={{
                      background: item.done ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.05)",
                      color: item.done ? "#4ade80" : "rgba(255,255,255,0.30)",
                      border: `1px solid ${item.done ? "rgba(34,197,94,0.25)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {item.done && <CheckCircle2 className="w-2.5 h-2.5" />}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───── Row 1: Get Mentorship + Unlock PRO ───── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* Get Mentorship (gold theme, smaller left) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 rounded-3xl overflow-hidden flex flex-col"
            style={{
              ...glassCard,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(250,204,21,0.15)",
              boxShadow: "0 8px 64px rgba(234,179,8,0.12), inset 0 1px 0 rgba(250,204,21,0.10)",
            }}
          >
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.08) 100%)",
                borderBottom: "1px solid rgba(250,204,21,0.12)",
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 4px 16px rgba(245,158,11,0.40)",
                }}
              >
                <Crown className="w-4 h-4 text-white" />
              </div>
              <h2 className="font-bold text-sm tracking-tight" style={{ color: "#fcd34d" }}>Get Mentorship</h2>
            </div>
            <div className="px-5 py-4 flex-1 flex flex-col">
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Personal mentor, exclusive courses & lifetime access to trading education.
              </p>
              <div className="flex flex-col gap-2 mb-4">
                {["Personal 1-on-1 mentor", "Exclusive course videos", "Lifetime access"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Star className="w-3 h-3 flex-shrink-0" style={{ color: "#f59e0b" }} />
                    <span className="text-white/60 text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-white/30 text-[10px]">Starting from</span>
                  <span className="font-bold text-lg" style={{ color: "#fcd34d" }}>$2</span>
                  <span className="text-white/40 text-xs">/lifetime</span>
                </div>
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    color: "white",
                    boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
                  }}
                >
                  <Crown className="w-4 h-4" />
                  View Mentorship Plans
                </button>
              </div>
            </div>
          </motion.div>

          {/* Unlock PRO (gold theme, bigger right) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 rounded-3xl overflow-hidden flex flex-col"
            style={{
              ...glassCard,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(250,204,21,0.15)",
              boxShadow: "0 8px 64px rgba(234,179,8,0.12), inset 0 1px 0 rgba(250,204,21,0.10)",
            }}
          >
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{
                background: "linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.08) 100%)",
                borderBottom: "1px solid rgba(250,204,21,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 4px 16px rgba(245,158,11,0.40)",
                  }}
                >
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <h2 className="font-bold text-sm tracking-tight" style={{ color: "#fcd34d" }}>Unlock PRO</h2>
              </div>
              <span
                className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.12)",
                  color: "#fbbf24",
                  border: "1px solid rgba(245,158,11,0.20)",
                }}
              >
                Features you're missing
              </span>
            </div>
            <div className="px-5 py-4 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { icon: BarChart3, label: "Advanced Analytics" },
                  { icon: Camera, label: "Dr Grand Trade Review" },
                  { icon: Layers, label: "Unlimited Screenshots" },
                  { icon: BookOpen, label: "Multiple Journals" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                    style={{
                      background: "rgba(250,204,21,0.04)",
                      border: "1px solid rgba(250,204,21,0.10)",
                    }}
                  >
                    <feat.icon className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(251,191,36,0.50)" }} />
                    <span className="text-white/70 text-xs font-medium">{feat.label}</span>
                    <Lock className="w-3 h-3 ml-auto flex-shrink-0" style={{ color: "rgba(251,191,36,0.30)" }} />
                  </div>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/30 text-[10px]">Starting from</span>
                    <span className="font-bold text-lg" style={{ color: "#fcd34d" }}>$16.58</span>
                    <span className="text-white/40 text-xs">/mo</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-semibold px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(245,158,11,0.15)",
                      color: "#fbbf24",
                      border: "1px solid rgba(245,158,11,0.25)",
                    }}
                  >
                    SAVE $77/yr
                  </span>
                  <button
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)",
                      border: "1px solid rgba(255,255,255,0.20)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
                    }}
                  >
                    Upgrade to PRO
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ───── Row 2: Profile/UID (left) + Trading Journal (right) ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Profile Info + UID combined */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden flex flex-col"
            style={glassCard}
          >
            <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(14,116,144,0.55) 100%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 4px 16px rgba(6,182,212,0.30)",
                }}
              >
                <Hash className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-sm tracking-tight">Account & UID</h2>
                <p className="text-cyan-300/40 text-[10px]">Profile details & Pocket Option link</p>
              </div>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3 flex-1">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-white/50 text-[10px] font-medium mb-1 flex items-center gap-1 block">
                    <User className="w-2.5 h-2.5" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={profile.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-white text-xs placeholder:text-white/25 outline-none focus:ring-1 focus:ring-cyan-400/40"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-white/50 text-[10px] font-medium mb-1 flex items-center gap-1 block">
                    <Mail className="w-2.5 h-2.5" /> Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={profile.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-white text-xs placeholder:text-white/25 outline-none focus:ring-1 focus:ring-cyan-400/40"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-white/50 text-[10px] font-medium mb-1 flex items-center gap-1 block">
                    <Phone className="w-2.5 h-2.5" /> Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 123-4567"
                    value={profile.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-white text-xs placeholder:text-white/25 outline-none focus:ring-1 focus:ring-cyan-400/40"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-white/50 text-[10px] font-medium mb-1 flex items-center gap-1 block">
                    <Globe className="w-2.5 h-2.5" /> Website
                  </label>
                  <input
                    type="text"
                    placeholder="https://yoursite.com"
                    value={profile.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-white text-xs placeholder:text-white/25 outline-none focus:ring-1 focus:ring-cyan-400/40"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/50 text-[10px] font-medium mb-1 flex items-center gap-1 block">
                  <ImageIcon className="w-2.5 h-2.5" /> Avatar URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/photo.jpg"
                  value={profile.avatarUrl}
                  onChange={(e) => updateField("avatarUrl", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg text-white text-xs placeholder:text-white/25 outline-none focus:ring-1 focus:ring-cyan-400/40"
                  style={inputStyle}
                />
              </div>

              <div
                className="mt-1 p-3 rounded-xl"
                style={{
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.15)",
                }}
              >
                <label className="text-cyan-300/70 text-[10px] font-semibold mb-1.5 flex items-center gap-1 block uppercase tracking-wider">
                  <Hash className="w-2.5 h-2.5" /> Pocket Option UID
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your Pocket Option UID"
                    value={profile.uid}
                    onChange={(e) => updateField("uid", e.target.value)}
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg text-white text-xs placeholder:text-white/25 outline-none focus:ring-1 focus:ring-cyan-400/40"
                    style={inputStyle}
                  />
                  <button
                    className="px-3 py-2 rounded-lg text-white text-xs font-semibold flex-shrink-0 transition-all active:scale-[0.97]"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 60%, #0369a1 100%)",
                      boxShadow: "0 4px 16px rgba(6,182,212,0.35)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>

              <button
                className="w-full mt-auto py-2.5 rounded-xl text-white text-xs font-semibold transition-all active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 60%, #0369a1 100%)",
                  boxShadow: "0 4px 20px rgba(6,182,212,0.35)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Save Profile
              </button>
            </div>
          </motion.div>

          {/* Trading Journal (gold theme with graphs) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden flex flex-col"
            style={{
              ...glassCard,
              border: "1px solid rgba(250,204,21,0.15)",
              boxShadow: "0 8px 64px rgba(234,179,8,0.12), inset 0 1px 0 rgba(250,204,21,0.10)",
            }}
          >
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{
                background: "linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.08) 100%)",
                borderBottom: "1px solid rgba(250,204,21,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 4px 16px rgba(245,158,11,0.40)",
                  }}
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h2 className="font-bold text-sm tracking-tight" style={{ color: "#fcd34d" }}>Trading Journal</h2>
              </div>
            </div>
            <div className="px-5 py-4 flex-1 flex flex-col">
              {/* Mini chart visualization */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "rgba(250,204,21,0.04)",
                  border: "1px solid rgba(250,204,21,0.08)",
                }}
              >
                <div className="flex items-end justify-between gap-1.5 h-[80px] mb-2">
                  {[35, 52, 45, 68, 42, 75, 58, 82, 65, 90, 72, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        background: h > 65
                          ? "linear-gradient(180deg, #f59e0b 0%, rgba(245,158,11,0.40) 100%)"
                          : "linear-gradient(180deg, rgba(251,191,36,0.35) 0%, rgba(251,191,36,0.10) 100%)",
                        minWidth: 4,
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ))}
                </div>
                <div className="flex justify-between">
                  <span className="text-white/20 text-[9px]">Jan</span>
                  <span className="text-white/20 text-[9px]">Jun</span>
                  <span className="text-white/20 text-[9px]">Dec</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "Win Rate", value: "68%", color: "#4ade80" },
                  { label: "Total Trades", value: "247", color: "#fbbf24" },
                  { label: "Profit", value: "+$1.2k", color: "#34d399" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg px-2 py-2 text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-[9px] text-white/30 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-white/40 text-xs leading-relaxed mb-4">
                Start tracking your trades, moods, and progress to improve your trading performance.
              </p>

              <button
                className="w-full mt-auto py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
                }}
              >
                <TrendingUp className="w-4 h-4" />
                Start Your Journal
              </button>
            </div>
          </motion.div>
        </div>

        {/* ───── Row 3: My Courses (blurred with lock) ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden relative"
          style={{
            ...glassCard,
            border: "1px solid rgba(250,204,21,0.15)",
            boxShadow: "0 8px 64px rgba(234,179,8,0.12), inset 0 1px 0 rgba(250,204,21,0.10)",
          }}
        >
          <div
            className="px-5 py-4 flex items-center justify-between relative z-10"
            style={{
              background: "linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.08) 100%)",
              borderBottom: "1px solid rgba(250,204,21,0.12)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 4px 16px rgba(245,158,11,0.40)",
                }}
              >
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <h2 className="font-bold text-sm tracking-tight" style={{ color: "#fcd34d" }}>My Courses</h2>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-medium transition-colors" style={{ color: "rgba(251,191,36,0.60)" }}>
              View Course <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="relative">
            {/* Course file list (blurred) */}
            <div className="px-5 py-4" style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }}>
              <div className="flex flex-col gap-2.5">
                {[
                  { title: "Introduction to Price Action", duration: "12:34", type: "video" },
                  { title: "Risk Management Fundamentals", duration: "18:22", type: "video" },
                  { title: "Candlestick Patterns Masterclass", duration: "24:15", type: "video" },
                  { title: "Support & Resistance Strategy", duration: "15:48", type: "doc" },
                  { title: "Trading Psychology Guide", duration: "20:30", type: "doc" },
                  { title: "Advanced Entry & Exit Signals", duration: "22:10", type: "video" },
                ].map((course) => (
                  <div
                    key={course.title}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(250,204,21,0.04)",
                      border: "1px solid rgba(250,204,21,0.08)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: course.type === "video"
                          ? "rgba(245,158,11,0.15)"
                          : "rgba(251,191,36,0.10)",
                      }}
                    >
                      {course.type === "video" ? (
                        <Play className="w-3.5 h-3.5" style={{ color: "#fbbf24" }} />
                      ) : (
                        <FileText className="w-3.5 h-3.5" style={{ color: "#fbbf24" }} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-white/70 text-xs font-medium block truncate">{course.title}</span>
                      <span className="text-white/25 text-[10px]">{course.duration}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/15 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Lock overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.25) 0%, rgba(217,119,6,0.20) 100%)",
                  border: "1px solid rgba(250,204,21,0.30)",
                  boxShadow: "0 8px 32px rgba(245,158,11,0.25)",
                }}
              >
                <Lock className="w-7 h-7" style={{ color: "#fbbf24" }} />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: "#fcd34d" }}>Unlock Exclusive Courses</h3>
              <p className="text-white/40 text-xs leading-relaxed max-w-sm text-center mb-4 px-4">
                Purchase a mentorship plan to access Pro, Elite & Monster trading courses with lifetime access
              </p>
              <button
                className="px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
                }}
              >
                <Crown className="w-4 h-4" />
                Browse Plans
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
