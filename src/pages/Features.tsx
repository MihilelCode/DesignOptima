import { motion } from "motion/react";
import { CheckCircle2, Layout, MousePointer2, Palette, Sparkles, Zap, Layers, Share2, Code } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Vector Networks",
      description: "Create complex shapes with our advanced vector network technology. Draw lines and curves that connect multiple points.",
      icon: MousePointer2,
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    },
    {
      title: "Auto Layout",
      description: "Design responsive interfaces that adapt to their content. Buttons resize with text, and lists rearrange themselves automatically.",
      icon: Layout,
      color: "text-violet-600",
      bg: "bg-violet-100"
    },
    {
      title: "Design Systems",
      description: "Build scalable design systems with reusable components, styles, and variables that stay in sync across all your files.",
      icon: Layers,
      color: "text-emerald-600",
      bg: "bg-emerald-100"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time. See cursors move, leave comments, and iterate faster than ever before.",
      icon: Share2,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Prototyping",
      description: "Turn static designs into interactive prototypes. Add transitions, animations, and micro-interactions without writing code.",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-100"
    },
    {
      title: "Developer Handoff",
      description: "Generate production-ready CSS, iOS, and Android code directly from your designs. Inspect elements and export assets easily.",
      icon: Code,
      color: "text-rose-600",
      bg: "bg-rose-100"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Powerful features for modern teams
            </h1>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Everything you need to design, prototype, and hand off beautiful user interfaces, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-900 mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed flex-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Design systems that scale with your product</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Stop updating the same button in 50 different places. With our advanced component system, you can make a change once and see it reflect everywhere instantly.
              </p>
              <ul className="space-y-4">
                {[
                  "Create flexible components with variants",
                  "Define global color and typography styles",
                  "Publish libraries to share across teams",
                  "Track component usage and updates"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-zinc-800 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <Palette className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Primary Button</h4>
                      <p className="text-xs text-zinc-400">Component • 3 Variants</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                    Published
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-700">
                    <span className="text-sm text-zinc-400">Default</span>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">Button</button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-700">
                    <span className="text-sm text-zinc-400">Hover</span>
                    <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(99,102,241,0.5)]">Button</button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-700">
                    <span className="text-sm text-zinc-400">Disabled</span>
                    <button className="px-6 py-2 bg-zinc-700 text-zinc-500 rounded-lg text-sm font-medium cursor-not-allowed">Button</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
