import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Hyprleap-Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Who we are", href: "#about" },
    { label: "What we do", href: "#services" },
    { label: "Industry", href: "#sectors" },
    { label: "Trusted By", href: "#worked" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="container-centered flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HyprLeape" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.label === "Contact"
                  ? "text-[var(--brand-green)] hover:opacity-80"
                  : "hover:text-slate-900"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-sm font-medium text-slate-700"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute top-0 right-0 w-full bg-white shadow-lg">

            {/* Close button */}
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-slate-500"
              >
                ×
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col divide-y">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-base font-medium text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
