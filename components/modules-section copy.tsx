// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Target, Monitor, Brain, Radio, ShieldAlert, Users, ArrowLeft, ArrowRight, Sparkles } from "lucide-react"

// const modules = [
//   {
//     id: 1,
//     icon: Target,
//     titleAr: "Decision Director",
//     titleEn: "موجه القرارات",
//     descriptionAr:
//       "نظام ذكي لتوجيه صناع القرار نحو الخيارات الأمثل بناءً على تحليل شامل للبيانات والسيناريوهات المحتملة",
//     descriptionEn: "Smart system guiding decision-makers toward optimal choices based on comprehensive data analysis",
//     color: "from-teal-500/20 to-cyan-500/20",
//     accentColor: "text-teal-400",
//     borderColor: "border-teal-500/30",
//   },
//   {
//     id: 2,
//     icon: Monitor,
//     titleAr: "Digital Command Room",
//     titleEn: "غرفة القيادة الرقمية",
//     descriptionAr: "مركز تحكم متكامل يوفر رؤية شاملة للعمليات في الوقت الفعلي مع قدرات التحكم والمراقبة المتقدمة",
//     descriptionEn: "Integrated control center providing real-time operational visibility with advanced monitoring",
//     color: "from-violet-500/20 to-purple-500/20",
//     accentColor: "text-violet-400",
//     borderColor: "border-violet-500/30",
//   },
//   {
//     id: 3,
//     icon: Brain,
//     titleAr: "Organization's Intelligence",
//     titleEn: "ذكاء المنظمة",
//     descriptionAr: "محرك ذكاء اصطناعي يحول البيانات المؤسسية إلى رؤى قابلة للتنفيذ لتعزيز الأداء المؤسسي",
//     descriptionEn: "AI engine transforming organizational data into actionable insights",
//     color: "from-amber-500/20 to-orange-500/20",
//     accentColor: "text-amber-400",
//     borderColor: "border-amber-500/30",
//   },
//   {
//     id: 4,
//     icon: Radio,
//     titleAr: "Media & Public Perception Engine",
//     titleEn: "محرك الإعلام والإدراك العام",
//     descriptionAr: "نظام متطور لرصد وتحليل التوجهات الإعلامية والرأي العام مع قدرات التنبؤ بالأزمات",
//     descriptionEn: "Advanced system for monitoring media trends and public opinion with crisis prediction",
//     color: "from-rose-500/20 to-pink-500/20",
//     accentColor: "text-rose-400",
//     borderColor: "border-rose-500/30",
//   },
//   {
//     id: 5,
//     icon: ShieldAlert,
//     titleAr: "Risk Management Suite",
//     titleEn: "منظومة إدارة المخاطر",
//     descriptionAr: "حزمة متكاملة لتحديد وتقييم ومراقبة المخاطر المؤسسية مع خطط استجابة آلية",
//     descriptionEn: "Comprehensive suite for identifying, assessing, and monitoring organizational risks",
//     color: "from-red-500/20 to-orange-500/20",
//     accentColor: "text-red-400",
//     borderColor: "border-red-500/30",
//   },
//   {
//     id: 6,
//     icon: Users,
//     titleAr: "Stakeholder Intelligence",
//     titleEn: "ذكاء أصحاب المصلحة",
//     descriptionAr: "نظام تحليلي متقدم لفهم وإدارة علاقات أصحاب المصلحة وتعزيز التواصل الاستراتيجي",
//     descriptionEn: "Advanced analytical system for understanding and managing stakeholder relationships",
//     color: "from-emerald-500/20 to-teal-500/20",
//     accentColor: "text-emerald-400",
//     borderColor: "border-emerald-500/30",
//   },
// ]

// export function ModulesSection() {
//   const [activeModule, setActiveModule] = useState(0)
//   const [hoveredModule, setHoveredModule] = useState<number | null>(null)

//   const nextModule = () => {
//     setActiveModule((prev) => (prev + 1) % modules.length)
//   }

//   const prevModule = () => {
//     setActiveModule((prev) => (prev - 1 + modules.length) % modules.length)
//   }

//   return (
//     <section className="w-full px-5 py-16 md:py-24 relative">
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
//       </div>

//       {/* Header */}
//       <div className="relative z-10 text-center mb-16">
       
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight"
//         >
//           Core Modules
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-lg text-muted-foreground max-w-2xl mx-auto"
//           dir="rtl"
//         >
//           ستة موديولات متكاملة تشكل منظومة ذكاء اصطناعي شاملة للمؤسسات الكبرى
//         </motion.p>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Desktop Layout */}
//         <div className="hidden lg:grid lg:grid-cols-12 gap-8">
//           {/* Module List */}
//           <div className="col-span-5 space-y-3">
//             {modules.map((module, index) => {
//               const Icon = module.icon
//               const isActive = activeModule === index
//               const isHovered = hoveredModule === index

//               return (
//                 <motion.div
//                   key={module.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setActiveModule(index)}
//                   onMouseEnter={() => setHoveredModule(index)}
//                   onMouseLeave={() => setHoveredModule(null)}
//                   className={`
//                     relative p-5 rounded-2xl cursor-pointer transition-all duration-300
//                     border ${isActive ? module.borderColor : "border-white/10"}
//                     ${isActive || isHovered ? `bg-gradient-to-r ${module.color}` : "bg-white/5"}
//                   `}
//                 >
//                   {/* Active Indicator */}
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeIndicator"
//                       className="absolute left-0 top-4 -translate-y-1/2 w-1 h-8 bg-primary rounded-full"
//                     />
//                   )}

//                   <div className="flex items-center gap-4">
//                     {/* Number Badge */}
//                     {/* <div
//                       className={`
//                       flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
//                       ${isActive ? "bg-primary/20" : "bg-white/10"}
//                       transition-colors duration-300
//                     `}
//                     >
//                       <span className={`text-lg font-bold ${isActive ? module.accentColor : "text-muted-foreground"}`}>
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </div> */}

//                     {/* Content */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 ">
//                         <Icon className={`w-5 h-5 ${isActive ? module.accentColor : "text-muted-foreground"}`} />
//                         <h3 className={`font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
//                           {module.titleAr}
//                         </h3>
//                       </div>
                     
//                     </div>

//                     {/* Arrow */}
//                     <motion.div animate={{ x: isActive ? 0 : -5, opacity: isActive ? 1 : 0 }} className="flex-shrink-0">
//                       <ArrowLeft className="w-5 h-5 text-primary" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>

//           {/* Module Detail */}
//           <div className="col-span-7">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeModule}
//                 initial={{ opacity: 0, y: 20, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.98 }}
//                 transition={{ duration: 0.3 }}
//                 className={`
//                   relative h-full rounded-3xl overflow-hidden
//                   border ${modules[activeModule].borderColor}
//                   bg-gradient-to-br ${modules[activeModule].color}
//                 `}
//               >
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-30">
//                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                     <defs>
//                       <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
//                         <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
//                       </pattern>
//                     </defs>
//                     <rect width="100" height="100" fill="url(#grid)" />
//                   </svg>
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
//                   {/* Icon */}
//                   <div
//                     className={`
//                     w-20 h-20 rounded-2xl bg-gradient-to-br ${modules[activeModule].color}
//                     border ${modules[activeModule].borderColor}
//                     flex items-center justify-center mb-8
//                   `}
//                   >
//                     {(() => {
//                       const Icon = modules[activeModule].icon
//                       return <Icon className={`w-10 h-10 ${modules[activeModule].accentColor}`} />
//                     })()}
//                   </div>

//                   {/* Module Number */}
//                   <div className="absolute top-8 right-8 md:top-12 md:right-12">
//                     <span className="text-7xl md:text-9xl font-bold text-white/5">
//                       {String(activeModule + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//                     {modules[activeModule].titleAr}
//                   </h3>
//                   <p className={`text-xl ${modules[activeModule].accentColor} mb-6`} dir="rtl">
//                     {modules[activeModule].titleEn}
//                   </p>

//                   {/* Description */}
//                   <p className="text-lg text-muted-foreground leading-relaxed max-w-xl" dir="rtl">
//                     {modules[activeModule].descriptionAr}
//                   </p>

                 
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Mobile Layout - Carousel */}
//         <div className="lg:hidden">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeModule}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               className={`
//                 relative rounded-3xl overflow-hidden p-6
//                 border ${modules[activeModule].borderColor}
//                 bg-gradient-to-br ${modules[activeModule].color}
//               `}
//             >
//               {/* Module Number Badge */}
//               <div className="absolute top-4 right-4">
//                 <span className="text-5xl font-bold text-white/10">{String(activeModule + 1).padStart(2, "0")}</span>
//               </div>

//               {/* Icon */}
//               <div
//                 className={`
//                 w-16 h-16 rounded-xl bg-white/10 border ${modules[activeModule].borderColor}
//                 flex items-center justify-center mb-6
//               `}
//               >
//                 {(() => {
//                   const Icon = modules[activeModule].icon
//                   return <Icon className={`w-8 h-8 ${modules[activeModule].accentColor}`} />
//                 })()}
//               </div>

//               {/* Content */}
//               <h3 className="text-2xl font-bold text-foreground mb-2">{modules[activeModule].titleAr}</h3>
//               <p className={`text-lg ${modules[activeModule].accentColor} mb-4`} dir="rtl">
//                 {modules[activeModule].titleEn}
//               </p>
//               <p className="text-muted-foreground leading-relaxed" dir="rtl">
//                 {modules[activeModule].descriptionAr}
//               </p>

            
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation */}
//           <div className="flex items-center justify-between mt-6">
//             <button
//               onClick={prevModule}
//               className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
//             >
//               <ArrowRight className="w-5 h-5 text-foreground" />
//             </button>

//             {/* Dots */}
//             <div className="flex items-center gap-2">
//               {modules.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveModule(index)}
//                   className={`
//                     w-2 h-2 rounded-full transition-all duration-300
//                     ${activeModule === index ? "w-6 bg-primary" : "bg-white/20"}
//                   `}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextModule}
//               className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5 text-foreground" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Monitor, Brain, Radio, ShieldAlert, Users, Sparkles } from "lucide-react"

const modules = [
  {
    id: 1,
    icon: Target,
    titleAr: "Decision Director",
    titleEn: "موجه القرارات",
    descriptionAr:
      "نظام ذكي لتوجيه صناع القرار نحو الخيارات الأمثل بناءً على تحليل شامل للبيانات والسيناريوهات المحتملة",
    color: "#14b8a6",
    gradient: "from-teal-500 to-cyan-400",
  },
  {
    id: 2,
    icon: Monitor,
    titleAr: "Digital Command Room",
    titleEn: "غرفة القيادة الرقمية",
    descriptionAr: "مركز تحكم متكامل يوفر رؤية شاملة للعمليات في الوقت الفعلي مع قدرات التحكم والمراقبة المتقدمة",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: 3,
    icon: Brain,
    titleAr: "Organization's Intelligence",
    titleEn: "ذكاء المنظمة",
    descriptionAr: "محرك ذكاء اصطناعي يحول البيانات المؤسسية إلى رؤى قابلة للتنفيذ لتعزيز الأداء المؤسسي",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    id: 4,
    icon: Radio,
    titleAr: "Media & Public Perception",
    titleEn: "محرك الإعلام والإدراك العام",
    descriptionAr: "نظام متطور لرصد وتحليل التوجهات الإعلامية والرأي العام مع قدرات التنبؤ بالأزمات",
    color: "#ec4899",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    id: 5,
    icon: ShieldAlert,
    titleAr: "Risk Management Suite",
    titleEn: "منظومة إدارة المخاطر",
    descriptionAr: "حزمة متكاملة لتحديد وتقييم ومراقبة المخاطر المؤسسية مع خطط استجابة آلية",
    color: "#ef4444",
    gradient: "from-red-500 to-orange-400",
  },
  {
    id: 6,
    icon: Users,
    titleAr: "Stakeholder Intelligence",
    titleEn: "ذكاء أصحاب المصلحة",
    descriptionAr: "نظام تحليلي متقدم لفهم وإدارة علاقات أصحاب المصلحة وتعزيز التواصل الاستراتيجي",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
  },
]

// Hexagon positions for the orbital layout
const hexPositions = [
  { angle: 0, x: 0, y: -180 },
  { angle: 60, x: 156, y: -90 },
  { angle: 120, x: 156, y: 90 },
  { angle: 180, x: 0, y: 180 },
  { angle: 240, x: -156, y: 90 },
  { angle: 300, x: -156, y: -90 },
]

export function ModulesSection() {
  const [activeModule, setActiveModule] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate through modules
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % modules.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="w-full px-5 py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Glow */}
        <motion.div
          animate={{
            background: `radial-gradient(circle at center, ${modules[activeModule].color}15 0%, transparent 70%)`,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">الموديولات الأساسية</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight"
        >
          Core Modules
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          dir="rtl"
        >
          ستة موديولات متكاملة تشكل منظومة ذكاء اصطناعي شاملة للمؤسسات الكبرى
        </motion.p>
      </div>

      {/* Desktop: Orbital/Hexagonal Layout */}
      <div className="hidden lg:block relative z-10 max-w-6xl mx-auto">
        <div className="relative h-[700px] flex items-center justify-center">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={modules[activeModule].color} stopOpacity="0.1" />
                <stop offset="50%" stopColor={modules[activeModule].color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={modules[activeModule].color} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Draw lines from center to each module */}
            {hexPositions.map((pos, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${pos.x}px)`}
                y2={`calc(50% + ${pos.y}px)`}
                stroke="url(#lineGradient)"
                strokeWidth={activeModule === i ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            ))}
            {/* Orbital Ring */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="200"
              fill="none"
              stroke={modules[activeModule].color}
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="8 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>

          {/* Center Hub */}
          <motion.div
            className="absolute z-20 w-48 h-48 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${modules[activeModule].color}20 0%, transparent 70%)`,
            }}
          >
            <motion.div
              key={activeModule}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-32 h-32 rounded-full border-2 flex items-center justify-center backdrop-blur-xl"
              style={{
                borderColor: modules[activeModule].color,
                background: `linear-gradient(135deg, ${modules[activeModule].color}10, transparent)`,
              }}
            >
              {(() => {
                const Icon = modules[activeModule].icon
                return <Icon className="w-14 h-14" style={{ color: modules[activeModule].color }} />
              })()}
            </motion.div>

            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: modules[activeModule].color }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Module Nodes */}
          {modules.map((module, index) => {
            const pos = hexPositions[index]
            const isActive = activeModule === index
            const Icon = module.icon

            return (
              <motion.div
                key={module.id}
                className="absolute cursor-pointer"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 30 : 10,
                }}
                onMouseEnter={() => {
                  setIsAutoPlaying(false)
                  setActiveModule(index)
                }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onClick={() => setActiveModule(index)}
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: isActive ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hexagon Shape */}
                <div
                  className={`
                    relative w-28 h-28 flex items-center justify-center
                    transition-all duration-500
                  `}
                >
                  {/* Hexagon Background */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop
                          offset="0%"
                          stopColor={isActive ? module.color : "#ffffff"}
                          stopOpacity={isActive ? 0.3 : 0.05}
                        />
                        <stop
                          offset="100%"
                          stopColor={isActive ? module.color : "#ffffff"}
                          stopOpacity={isActive ? 0.1 : 0.02}
                        />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,2 95,25 95,75 50,98 5,75 5,25"
                      fill={`url(#grad-${index})`}
                      stroke={isActive ? module.color : "rgba(255,255,255,0.2)"}
                      strokeWidth={isActive ? 2 : 1}
                    />
                  </svg>

                  {/* Icon */}
                  <Icon
                    className={`w-8 h-8 relative z-10 transition-colors duration-300`}
                    style={{ color: isActive ? module.color : "rgba(255,255,255,0.5)" }}
                  />

                  {/* Active Glow */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ background: module.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                    />
                  )}
                </div>

                {/* Label */}
                <motion.div
                  className={`
                    absolute whitespace-nowrap text-center
                    ${pos.y < 0 ? "-top-12" : "top-full mt-2"}
                    left-1/2 -translate-x-1/2
                  `}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: isActive ? module.color : "rgba(255,255,255,0.6)" }}
                  >
                    {module.titleAr}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Active Module Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl"
            >
              <div
                className="relative p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${modules[activeModule].color}10, transparent)`,
                  borderColor: `${modules[activeModule].color}30`,
                }}
              >
                {/* Decorative Corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32"
                  style={{
                    background: `radial-gradient(circle at top right, ${modules[activeModule].color}20, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.span
                    className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      background: `${modules[activeModule].color}20`,
                      color: modules[activeModule].color,
                    }}
                  >
                    Module {String(activeModule + 1).padStart(2, "0")}
                  </motion.span>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {modules[activeModule].titleAr}
                  </h3>
                  <p className="text-lg mb-4" style={{ color: modules[activeModule].color }} dir="rtl">
                    {modules[activeModule].titleEn}
                  </p>
                  <p className="text-muted-foreground leading-relaxed" dir="rtl">
                    {modules[activeModule].descriptionAr}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 flex gap-1">
                  {modules.map((_, i) => (
                    <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-white/10">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: modules[i].color }}
                        initial={{ width: "0%" }}
                        animate={{
                          width: i === activeModule ? "100%" : i < activeModule ? "100%" : "0%",
                        }}
                        transition={{
                          duration: i === activeModule ? 4 : 0.3,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: 3D Card Stack */}
      <div className="lg:hidden relative z-10">
        <div className="relative h-[500px] flex items-center justify-center">
          {modules.map((module, index) => {
            const Icon = module.icon
            const isActive = activeModule === index
            const offset = index - activeModule

            return (
              <motion.div
                key={module.id}
                className="absolute w-[85%] max-w-[320px]"
                initial={false}
                animate={{
                  x: offset * 20,
                  y: Math.abs(offset) * 10,
                  scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                  zIndex: modules.length - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                  rotateY: offset * -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setActiveModule(index)}
                style={{ perspective: 1000 }}
              >
                <div
                  className="p-6 rounded-3xl backdrop-blur-xl border h-[380px] flex flex-col"
                  style={{
                    background: `linear-gradient(135deg, ${module.color}15, ${module.color}05)`,
                    borderColor: `${module.color}40`,
                  }}
                >
                  {/* Module Number */}
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${module.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: module.color }} />
                    </div>
                    <span className="text-5xl font-bold" style={{ color: `${module.color}20` }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{module.titleAr}</h3>
                  <p className="text-base mb-4" style={{ color: module.color }} dir="rtl">
                    {module.titleEn}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1" dir="rtl">
                    {module.descriptionAr}
                  </p>

                  {/* Swipe Indicator */}
                  {isActive && (
                    <motion.div
                      className="mt-4 flex justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {modules.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === activeModule ? "w-6" : ""
                          }`}
                          style={{
                            background: i === activeModule ? module.color : "rgba(255,255,255,0.2)",
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setActiveModule((prev) => (prev - 1 + modules.length) % modules.length)}
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveModule((prev) => (prev + 1) % modules.length)}
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
