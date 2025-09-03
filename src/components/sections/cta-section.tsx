'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power4.out",
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
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: -40, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.35,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-secondary">
      <div className="container text-center">
        <div>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Scale Your MSP?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See how Everest can help you support more clients without adding headcount. Schedule a personalized walkthrough with our team.
          </p>
        </div>
        <div>
          <a ref={buttonRef} href="https://calendly.com/yolandaycao/intro" target="_blank" rel="noopener noreferrer">
            <Button className="h-auto text-lg font-semibold px-8 py-3 transition-transform hover:-translate-y-1">
              Book a Demo
            </Button>
          </a>
        </div>
        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-4 font-semibold">
            Subscribe to newsletter for a free trial
          </p>
          <form ref={formRef} className="flex justify-center items-center gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full"
            />
            <Button type="submit" className="bg-dark-navy text-white hover:bg-dark-navy/90 font-semibold px-6 h-10 shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}