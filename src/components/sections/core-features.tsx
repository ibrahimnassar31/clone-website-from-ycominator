"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Bot, MessageSquare, Settings, CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Bot,
    title: "AI Triage & Dispatch Agent",
    description: "Instantly tags, prioritizes, and routes tickets inside your PSA.",
    details: "No tabs. No copy-paste. Just clean, actionable tickets your techs can trust.",
  },
  {
    icon: MessageSquare,
    title: "Ticket Resolution Agent",
    description: "Our AI handles tickets from start to finish",
    details: "Asking follow-up questions, resolving common issues, posting notes, and closing tickets.",
  },
  {
    icon: Settings,
    title: "White-Glove Automation Service",
    description: "We build the workflows with you.",
    details: "From day one, our team sets up, tunes, and optimizes your automation to maximize ROI.",
  },
];

const CoreFeatures = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const imageRef = useRef<HTMLDivElement>(null);

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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
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
    <section ref={sectionRef} id="features" className="py-20 bg-gradient-to-br from-white via-secondary/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary/10 text-primary mb-4">
            Core Features
          </div>
          <h2 className="text-4xl font-bold text-primary-navy mb-6">
            From Dispatch to Resolution, Fully Automated
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover how Everest's intelligent automation transforms your support operations
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  ref={el => { cardsRef.current[index] = el; }}
                  onClick={() => setActiveCard(index)}
                  className={cn(
                    "p-6 rounded-xl border-2 cursor-pointer transition-all duration-300",
                    isActive
                      ? "border-primary bg-gradient-to-r from-primary/5 to-primary/10 shadow-lg"
                      : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-md"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "p-3 rounded-lg transition-all",
                        isActive ? "bg-primary text-white" : "bg-gray-100 text-primary"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-navy mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                      <div
                        className={cn(
                          "transition-all duration-300 overflow-hidden",
                          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-sm text-gray-700 leading-relaxed">{feature.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative" ref={imageRef}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5ee1cd3-801e-4a8d-9689-89460ae3ba96-everestmanagedai-com/assets/images/c9320fa8-104d-40ff-8fa3-6d5d28c09dd6-1.png?"
                alt="AI Triage & Dispatch Agent"
                width={560}
                height={350}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Live Demo Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;