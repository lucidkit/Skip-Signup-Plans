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
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
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
          className="text-2xl font-bold text-white"
          key={percentage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {percentage}%
        </motion.span>
        <span className="text-[10px] text-white/40 font-medium tracking-wide uppercase">
          Complete
        </span>
      </div>
    </div>
  );
}

interface ProfileField {
  key: string;
  label: string;
  placeholder: string;
  icon: React.ElementType;
  type?: string;
}

const profileFields: ProfileField[] = [
  { key: "fullName", label: "Full Name", placeholder: "Your full name", icon: User },
  { key: "email", label: "Email", placeholder: "your@email.com", icon: Mail },
  { key: "phone", label: "Phone", placeholder: "+1 (555) 123-4567", icon: Phone },
  { key: "website", label: "Website", placeholder: "https://yoursite.com", icon: Globe },
];

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(20px)",
} as const;

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

  return (
    <div
      className="min-h-screen flex items-start justify-center pt-10 pb-24 px-4"
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

      <div className="relative w-full max-w-lg flex flex-col gap-5 z-10">

        <div className="flex items-center gap-2 mb-1 px-1">
          <User className="w-4 h-4 text-blue-300/80" />
          <span className="text-white/90 font-semibold text-base tracking-tight">
            Profile
          </span>
        </div>

        {/* ───── Profile Header Card ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden"
          style={glassCard}
        >
          <div
            className="px-6 py-6"
            style={{
              background: glassBannerGradient,
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center gap-5">
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
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
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full"
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
            </div>
          </div>

          {/* Progress ring */}
          <div className="px-6 py-6 flex items-center gap-6">
            <CircularProgress percentage={completionPercentage} size={100} strokeWidth={7} />
            <div className="flex-1">
              <h3 className="text-white/90 font-semibold text-sm mb-1">
                Profile Completion
              </h3>
              <p className="text-white/40 text-xs leading-relaxed mb-3">
                Complete your profile to unlock all features. The more info you provide, the better your experience.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "Name", done: !!profile.fullName.trim() },
                  { label: "Email", done: !!profile.email.trim() },
                  { label: "Phone", done: !!profile.phone.trim() },
                  { label: "Website", done: !!profile.website.trim() },
                  { label: "UID", done: !!profile.uid.trim() },
                  { label: "Avatar", done: !!profile.avatarUrl.trim() },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1"
                    style={{
                      background: item.done
                        ? "rgba(34,197,94,0.15)"
                        : "rgba(255,255,255,0.05)",
                      color: item.done
                        ? "#4ade80"
                        : "rgba(255,255,255,0.30)",
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

        {/* ───── UID Section ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden"
          style={glassCard}
        >
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.20) 0%, rgba(14,116,144,0.12) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(14,116,144,0.55) 100%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 4px 16px rgba(6,182,212,0.30)",
              }}
            >
              <Hash className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm tracking-tight">
                Pocket Option UID
              </h2>
              <p className="text-cyan-300/50 text-[11px] mt-0.5">
                Link your trading account
              </p>
            </div>
          </div>
          <div className="px-6 py-5">
            <label className="text-white/60 text-xs font-medium mb-2 block">
              Account UID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your Pocket Option UID"
                value={profile.uid}
                onChange={(e) => updateField("uid", e.target.value)}
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 focus:ring-1 focus:ring-cyan-400/40"
                style={inputStyle}
              />
              <button
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold flex-shrink-0 transition-all duration-200 active:scale-[0.97]"
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #0284c7 60%, #0369a1 100%)",
                  boxShadow: "0 4px 20px rgba(6,182,212,0.35)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Save
              </button>
            </div>
            <p className="text-white/25 text-[11px] mt-2 leading-relaxed">
              You can find your UID in your Pocket Option account profile section.
            </p>
          </div>
        </motion.div>

        {/* ───── Profile Fields ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden"
          style={glassCard}
        >
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{
              background: glassBannerGradient,
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(96,165,250,0.45) 0%, rgba(59,130,246,0.55) 100%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 4px 16px rgba(59,130,246,0.30)",
              }}
            >
              <User className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm tracking-tight">
                Personal Info
              </h2>
              <p className="text-blue-300/50 text-[11px] mt-0.5">
                Your account details
              </p>
            </div>
          </div>
          <div className="px-6 py-5 flex flex-col gap-4">
            {profileFields.map((field) => (
              <div key={field.key}>
                <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 block">
                  <field.icon className="w-3 h-3 text-white/30" />
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={(profile as any)[field.key] || ""}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 focus:ring-1 focus:ring-blue-400/40"
                  style={inputStyle}
                />
              </div>
            ))}

            <div>
              <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 block">
                <ImageIcon className="w-3 h-3 text-white/30" />
                Avatar URL
              </label>
              <input
                type="text"
                placeholder="https://example.com/your-photo.jpg"
                value={profile.avatarUrl}
                onChange={(e) => updateField("avatarUrl", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 focus:ring-1 focus:ring-blue-400/40"
                style={inputStyle}
              />
            </div>

            <button
              className="w-full mt-2 px-4 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #0284c7 60%, #0369a1 100%)",
                boxShadow: "0 4px 20px rgba(6,182,212,0.35)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Save Profile
            </button>
          </div>
        </motion.div>

        {/* ───── Quick Actions Grid ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-3"
        >
          {[
            {
              title: "Get Mentorship",
              desc: "Personal 1-on-1 mentor",
              icon: GraduationCap,
              gradient:
                "linear-gradient(135deg, rgba(168,85,247,0.25) 0%, rgba(124,58,237,0.15) 100%)",
              iconBg:
                "linear-gradient(135deg, rgba(168,85,247,0.45) 0%, rgba(124,58,237,0.55) 100%)",
              iconShadow: "0 4px 16px rgba(168,85,247,0.30)",
            },
            {
              title: "Unlock PRO",
              desc: "Advanced analytics",
              icon: Crown,
              gradient:
                "linear-gradient(135deg, rgba(250,204,21,0.20) 0%, rgba(234,179,8,0.12) 100%)",
              iconBg:
                "linear-gradient(135deg, rgba(250,204,21,0.45) 0%, rgba(234,179,8,0.55) 100%)",
              iconShadow: "0 4px 16px rgba(250,204,21,0.30)",
            },
            {
              title: "Trading Journal",
              desc: "Track your trades",
              icon: TrendingUp,
              gradient:
                "linear-gradient(135deg, rgba(34,197,94,0.20) 0%, rgba(22,163,74,0.12) 100%)",
              iconBg:
                "linear-gradient(135deg, rgba(34,197,94,0.45) 0%, rgba(22,163,74,0.55) 100%)",
              iconShadow: "0 4px 16px rgba(34,197,94,0.30)",
            },
            {
              title: "My Courses",
              desc: "View your courses",
              icon: BookOpen,
              gradient:
                "linear-gradient(135deg, rgba(6,182,212,0.20) 0%, rgba(14,116,144,0.12) 100%)",
              iconBg:
                "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(14,116,144,0.55) 100%)",
              iconShadow: "0 4px 16px rgba(6,182,212,0.30)",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl p-4 transition-all duration-200 cursor-pointer group"
              style={{
                ...glassCard,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{
                  background: item.iconBg,
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: item.iconShadow,
                }}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white/90 font-semibold text-sm mb-0.5">
                {item.title}
              </h3>
              <p className="text-white/35 text-[11px]">{item.desc}</p>
              <div className="flex items-center gap-1 mt-2 text-white/25 group-hover:text-white/50 transition-colors">
                <span className="text-[10px] font-medium">Open</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
