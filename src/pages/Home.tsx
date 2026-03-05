import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Layers, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 max-w-4xl mx-auto leading-tight">
              Design Optimal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">UI/UX</span> Experiences
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Enhance user experience by offering intuitive UI design tools, enabling designers to create visually appealing and user-friendly interfaces effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/tools"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-sm hover:bg-indigo-700 transition-all hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Explore Tools
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-700 bg-white border border-zinc-200 rounded-full shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-all w-full sm:w-auto"
              >
                View Features
              </Link>
            </div>
          </motion.div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm p-2 shadow-2xl">
              <div className="rounded-xl overflow-hidden border border-zinc-100 bg-zinc-50 aspect-[16/9] relative flex items-center justify-center">
                {/* Abstract UI representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
                <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg shadow-sm border border-zinc-100 flex items-center px-4 gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <div className="h-4 w-64 bg-zinc-100 rounded ml-4"></div>
                </div>
                <div className="absolute top-20 left-4 bottom-4 w-64 bg-white rounded-lg shadow-sm border border-zinc-100 p-4 flex flex-col gap-4">
                  <div className="h-8 w-full bg-indigo-50 rounded"></div>
                  <div className="h-8 w-full bg-zinc-50 rounded"></div>
                  <div className="h-8 w-full bg-zinc-50 rounded"></div>
                  <div className="h-8 w-full bg-zinc-50 rounded"></div>
                </div>
                <div className="absolute top-20 left-72 right-4 bottom-4 bg-white rounded-lg shadow-sm border border-zinc-100 p-8 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="h-32 w-1/3 bg-indigo-100 rounded-xl"></div>
                    <div className="h-32 w-1/3 bg-violet-100 rounded-xl"></div>
                    <div className="h-32 w-1/3 bg-emerald-100 rounded-xl"></div>
                  </div>
                  <div className="flex-1 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-8 border-indigo-200 border-t-indigo-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl mb-4">Everything you need to design better</h2>
            <p className="text-lg text-zinc-600">
              Our comprehensive suite of tools helps you create, iterate, and perfect your user interfaces with unprecedented speed and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intuitive Interface",
                description: "A clean, distraction-free workspace that puts your design front and center while keeping powerful tools just a click away.",
                icon: Layers,
                color: "text-blue-600",
                bg: "bg-blue-100"
              },
              {
                title: "Lightning Fast",
                description: "Built on modern web technologies to ensure smooth performance even with complex, multi-layered design files.",
                icon: Zap,
                color: "text-amber-600",
                bg: "bg-amber-100"
              },
              {
                title: "Pixel Perfect",
                description: "Advanced alignment, snapping, and measurement tools guarantee your designs are precise down to the last pixel.",
                icon: Palette,
                color: "text-emerald-600",
                bg: "bg-emerald-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600 transform -skew-y-2 origin-top-left scale-110 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-indigo-700 rounded-3xl p-8 md:p-16 text-center shadow-2xl border border-indigo-500">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your design workflow?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of designers who are already creating better user experiences with DesignOptima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-base font-medium text-indigo-600 bg-white rounded-full shadow-lg hover:bg-indigo-50 transition-colors">
                Start for free
              </button>
              <button className="px-8 py-4 text-base font-medium text-white bg-indigo-800 rounded-full shadow-lg hover:bg-indigo-900 transition-colors border border-indigo-600">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-indigo-200 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 14-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
