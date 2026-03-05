import { motion } from "motion/react";
import { CheckCircle2, HelpCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small projects.",
      features: [
        "Up to 3 projects",
        "Basic design tools",
        "Export to PNG/JPG",
        "Community support",
        "30-day version history"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$12",
      period: "/month",
      description: "For professional designers and freelancers.",
      features: [
        "Unlimited projects",
        "Advanced vector tools",
        "Export to SVG/PDF",
        "Priority email support",
        "Unlimited version history",
        "Custom fonts",
        "Team libraries"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Organization",
      price: "$45",
      period: "/user/month",
      description: "For teams that need advanced security and control.",
      features: [
        "Everything in Professional",
        "SSO integration",
        "Advanced access controls",
        "Dedicated account manager",
        "Custom billing",
        "Design system analytics",
        "Onboarding support"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-zinc-600">
            Choose the plan that best fits your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white shadow-2xl scale-105 z-10 border-2 border-indigo-500"
                    : "bg-white text-zinc-900 shadow-lg border border-zinc-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-zinc-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-zinc-500"}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-lg font-medium ${plan.highlighted ? "text-indigo-200" : "text-zinc-500"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                
                <button
                  className={`w-full py-4 rounded-xl font-medium text-lg transition-all mb-8 ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-zinc-50 shadow-md"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {plan.cta}
                </button>
                
                <div className="space-y-4">
                  <p className={`text-sm font-medium uppercase tracking-wider ${plan.highlighted ? "text-indigo-200" : "text-zinc-900"}`}>
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-indigo-300" : "text-indigo-600"}`} />
                        <span className={`text-sm ${plan.highlighted ? "text-indigo-50" : "text-zinc-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Frequently asked questions</h2>
            <p className="text-lg text-zinc-600">
              Have a different question and can't find the answer you're looking for? Reach out to our support team.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                q: "Can I switch plans later?",
                a: "Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers for annual Organization plans."
              },
              {
                q: "Do you offer discounts for non-profits?",
                a: "Yes, we offer a 50% discount for eligible non-profit organizations and educational institutions. Please contact our sales team for more information."
              },
              {
                q: "What happens if I exceed my project limit on the Free plan?",
                a: "You won't be able to create new projects until you either upgrade your plan or delete existing projects to free up space."
              }
            ].map((faq, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 bg-indigo-100 p-2 rounded-lg shrink-0">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">{faq.q}</h4>
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
