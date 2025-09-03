'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CloudCog, DollarSign, UserPlus } from 'lucide-react';

const metricsData = [
  {
    icon: CloudCog,
    value: '30%',
    description: 'Reduce L1–L2 workload with automated resolution',
  },
  {
    icon: DollarSign,
    value: '$9B',
    description: 'Potential industry-wide labor savings',
  },
  {
    icon: UserPlus,
    value: '50%',
    description: 'More clients without growing headcount',
  },
];

const ProvenResults = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const metricRefs = useRef<Array<HTMLDivElement | null>>([]);

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
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="results" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={headingRef} className="text-3xl font-bold text-primary md:text-4xl mb-4">
            Proven Results for MSPs
          </h2>
          <p className="text-xl text-slate-600">
            See the impact Everest delivers for managed service providers worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {metricsData.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                ref={el => { metricRefs.current[index] = el; }}
                className="text-center bg-card p-8 rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="text-primary mb-4">
                  <IconComponent className="h-10 w-10 mx-auto" strokeWidth={1.5} />
                </div>
                <h3 className="text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </h3>
                <p className="text-slate-500">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;