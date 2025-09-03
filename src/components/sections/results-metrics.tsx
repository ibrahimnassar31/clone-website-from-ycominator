"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, Clock, Users, DollarSign, } from "lucide-react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}%</>;
};

interface Metric {
  icon: LucideIcon;
  value: number;
  title: string;
  description: string;
}

const metricsData: Metric[] = [
  {
    icon: TrendingUp,
    value: 40,
    title: "Efficiency Increase",
    description: "Average improvement in ticket resolution speed",
  },
  {
    icon: Clock,
    value: 60,
    title: "Time Savings",
    description: "Reduction in manual ticket processing",
  },
  {
    icon: Users,
    value: 50,
    title: "Capacity Increase",
    description: "More clients served without additional staff",
  },
  {
    icon: DollarSign,
    value: 15,
    title: "Margin Lift",
    description: "Average margin lift in the first year",
  },
];

const ResultsMetrics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const metricRefs = useRef<Array<HTMLDivElement | null>>([]);
  const liveBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    metricRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95, rotate: i % 2 === 0 ? -4 : 4 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            delay: i * 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    if (liveBarRef.current) {
      gsap.fromTo(
        liveBarRef.current,
        { opacity: 0, scale: 0.7, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: liveBarRef.current,
            start: "top 98%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="results" className="py-20 md:py-28 bg-gradient-to-br from-[#1E3A8A] to-[#1E293B]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See the measurable impact Everest delivers for MSPs like yours
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metricsData.map((metric, i) => (
            <div
              key={metric.title}
              ref={el => { metricRefs.current[i] = el; }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-white/10">
                <metric.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedNumber value={metric.value} />
              </h3>
              <p className="font-semibold text-white text-lg mb-2">{metric.title}</p>
              <p className="text-gray-300 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div ref={liveBarRef} className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full inline-flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="text-sm text-gray-400">Live metrics updated in real-time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
