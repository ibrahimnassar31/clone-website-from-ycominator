"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>
      <header className="py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="container flex justify-between items-center bg-white/30 pt-4 pb-4 ">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-white transition-all"
            >
              Everest
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="font-medium text-primary hover:text-white transition-all"
            >
              Features
            </Link>
            <Link
              href="/#integration"
              className="font-medium text-primary hover:text-white transition-all"
            >
              Integrations
            </Link>
            <Link
              href="/#results"
              className="font-medium text-primary hover:text-white transition-all"
            >
              Results
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:-translate-y-0.5"
            >
              <Link href="https://calendly.com/yolandaycao/intro">
                Book a Demo
              </Link>
            </Button>
          </div>
          <button
            className="md:hidden p-2"
            aria-label="Toggle mobile menu"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-slate-300" />
          </button>
        </div>
        <div
          className={cn(
            "md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden",
            isMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="container py-5 flex flex-col space-y-1">
            <Link href="/#features" className="text-gray-600 font-medium hover:text-primary px-5 py-2.5 transition-all rounded-md hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="/#integration" className="text-gray-600 font-medium hover:text-primary px-5 py-2.5 transition-all rounded-md hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Integrations</Link>
            <Link href="/#results" className="text-gray-600 font-medium hover:text-primary px-5 py-2.5 transition-all rounded-md hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Results</Link>
            <Link href="https://calendly.com/yolandaycao/intro" className="text-gray-600 font-medium hover:text-primary px-5 py-2.5 transition-all rounded-md hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Book a Demo</Link>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"
        />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered MSP Automation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-4xl md:text-6xl text-white font-bold leading-tight"
              >
                Your Techs' AI Right Hand
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="block text-5xl font-bold pt-4 pb-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                >
                  That Never Sleeps
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl"
              >
                Everest augments your best technicians with AI that helps them solve tickets 10x faster, boosting capacity, margins, and revenue.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold transition-all hover:transform hover:-translate-y-1 hover:shadow-xl group"
                >
                  <Link href="https://calendly.com/yolandaycao/intro">
                    Book a Live Walkthrough
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-200 text-sm">No developers required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-200 text-sm">Go live in 7 days</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 2 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 2.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 2.4 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5ee1cd3-801e-4a8d-9689-89460ae3ba96-everestmanagedai-com/assets/images/c9320fa8-104d-40ff-8fa3-6d5d28c09dd6-1.png?"
                    alt="Everest Product Dashboard"
                    width={560}
                    height={315}
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.6 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                Live Dashboard
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.8 }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg text-primary"
              >
                Real-time Analytics
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
