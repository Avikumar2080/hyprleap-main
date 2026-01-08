import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Hyprleap-Logo.png";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-b">
      <div className="container-centered flex items-center justify-between h-20">
        
        {/* Brand */}
        {/* <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-slate-900"
        >
          HyprLeape
        </Link> */}
        <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="HyprLeape"
    className="h-8 w-auto"
  />
</Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#about" className="hover:text-slate-900">Who we are</a>
          <a href="#services" className="hover:text-slate-900">What we do</a>
          <a href="#sectors" className="hover:text-slate-900">Industry</a>
          <a href="#recruiting" className="hover:text-slate-900">Recruiting</a>
          <a
            href="#contact"
            className="text-[var(--brand-green)] hover:opacity-80"
          >
            Contact
          </a>
        </nav>

        {/* Mobile placeholder */}
        <div className="lg:hidden text-sm text-slate-500">
          Menu
        </div>
      </div>
    </header>
  );
}
