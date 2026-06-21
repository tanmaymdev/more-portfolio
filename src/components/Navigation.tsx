"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { meta } from "@/lib/data";

const navLinks = [
  { label: "Impact", href: "#impact" },
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const pathname = usePathname();
  const onExpeditions = pathname === "/expeditions";
  const onPlayground = pathname === "/playground";

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setIsScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backdropFilter: isScrolled ? "blur(12px)" : "none" }}
      >
        <motion.div
          className="absolute inset-0 bg-[#F8F7F4]/90"
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-[#E0DDD8]"
          style={{ opacity: borderOpacity }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-[#111110] text-lg tracking-[-0.02em] hover:text-[#B8860B] transition-colors duration-200"
            aria-label="Home"
          >
            TM
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-[0.06em] uppercase text-[#6B6966] hover:text-[#111110] transition-colors duration-200 font-sans"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/expeditions"
              className={`text-[13px] tracking-[0.06em] uppercase transition-colors duration-200 font-sans ${
                onExpeditions ? "text-[#B8860B]" : "text-[#6B6966] hover:text-[#111110]"
              }`}
            >
              Expeditions
            </Link>
            <Link
              href="/playground"
              className={`text-[13px] tracking-[0.06em] uppercase transition-colors duration-200 font-sans ${
                onPlayground ? "text-[#B8860B]" : "text-[#6B6966] hover:text-[#111110]"
              }`}
            >
              Playground
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={meta.resumeUrl}
              download
              className="flex items-center gap-1.5 text-[13px] font-medium text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200"
              aria-label="Download resume PDF"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="text-[13px] font-medium text-[#111110] border border-[#E0DDD8] px-4 py-2 rounded-full hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 p-2 -mr-2 text-[#111110] hover:text-[#B8860B] transition-colors duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F7F4] flex flex-col pt-16"
          >
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[#111110] hover:text-[#B8860B] transition-colors duration-200 py-4 border-b border-[#E0DDD8]"
                  style={{ fontSize: "clamp(1.8rem, 8vw, 2.6rem)", letterSpacing: "-0.02em" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + navLinks.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/expeditions"
                  onClick={closeMenu}
                  className={`block font-serif transition-colors duration-200 py-4 border-b border-[#E0DDD8] ${
                    onExpeditions ? "text-[#B8860B]" : "text-[#111110] hover:text-[#B8860B]"
                  }`}
                  style={{ fontSize: "clamp(1.8rem, 8vw, 2.6rem)", letterSpacing: "-0.02em" }}
                >
                  Expeditions
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + (navLinks.length + 1) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/playground"
                  onClick={closeMenu}
                  className={`block font-serif transition-colors duration-200 py-4 ${
                    onPlayground ? "text-[#B8860B]" : "text-[#111110] hover:text-[#B8860B]"
                  }`}
                  style={{ fontSize: "clamp(1.8rem, 8vw, 2.6rem)", letterSpacing: "-0.02em" }}
                >
                  Playground
                </Link>
              </motion.div>
            </nav>

            {/* Mobile footer actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 flex items-center gap-6"
              style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
            >
              <a
                href={meta.resumeUrl}
                download
                onClick={closeMenu}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200 border border-[#E0DDD8] hover:border-[#B8860B] px-4 py-2.5 rounded-full"
                aria-label="Download resume PDF"
              >
                <Download size={13} />
                <span>Resume</span>
              </a>
              <a
                href={`mailto:${meta.email}`}
                className="text-[13px] font-medium text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200"
              >
                {meta.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
