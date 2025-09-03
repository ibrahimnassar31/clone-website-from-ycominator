'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EfficiencyStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const statCardRef = useRef<HTMLDivElement>(null);

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
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (statCardRef.current) {
      gsap.fromTo(
        statCardRef.current,
        { opacity: 0, scale: 0.7, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: statCardRef.current,
            start: "top 95%",
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
    <div ref={sectionRef} className="bg-secondary p-8 rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/3">
          <h3 ref={headingRef} className="text-2xl font-bold text-primary mb-4">
            Maximize L1 Support Efficiency
          </h3>
          <p className="text-lg text-muted-foreground mb-4">
            The average L1 technician can handle 80% more tickets with Everest's automation. Our platform helps your first-line support team work more efficiently, enabling you to:
          </p>
          <ul ref={listRef} className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Automate routine L1 support tasks</li>
            <li>Reduce L1 resolution time by up to 80%</li>
            <li>Improve L1 technician productivity</li>
            <li>Free up senior techs for complex issues</li>
          </ul>
        </div>
        <div ref={statCardRef} className="w-full md:w-1/3 bg-card p-6 rounded-lg shadow-sm">
          <div className="text-center">
            <p className="text-5xl font-bold text-primary mb-2">
              80%
            </p>
            <p className="text-lg text-muted-foreground">
              more tickets handled by L1 support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyStats;