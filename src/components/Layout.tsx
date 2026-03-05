import { Outlet, Link, useLocation } from "react-router-dom";
import { Paintbrush, LayoutDashboard, Sparkles, CreditCard, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Paintbrush },
    { name: "Tools", path: "/tools", icon: LayoutDashboard },
    { name: "Features", path: "/features", icon: Sparkles },
    { name: "Pricing", path: "/pricing", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-zinc-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Paintbrush className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-xl tracking-tight">DesignOptima</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-indigo-600 flex items-center gap-2",
                      isActive ? "text-indigo-600" : "text-zinc-600"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                Log in
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-600 hover:text-zinc-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3",
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-zinc-200 flex flex-col gap-2 px-3">
                <button className="w-full text-left py-2 text-base font-medium text-zinc-600 hover:text-zinc-900">
                  Log in
                </button>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors text-center">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-600 p-1.5 rounded-lg">
                  <Paintbrush className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-xl tracking-tight">DesignOptima</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Empowering designers to create visually appealing and user-friendly interfaces with intuitive tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link to="/tools" className="hover:text-indigo-600 transition-colors">Tools</Link></li>
                <li><Link to="/features" className="hover:text-indigo-600 transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2026 DesignOptima. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
