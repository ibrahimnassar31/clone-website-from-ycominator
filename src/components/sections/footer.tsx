'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    colRefs.current.forEach((col, i) => {
      if (col) {
        gsap.fromTo(
          col,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.18,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: col,
              start: "top 98%",
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
    <footer className="bg-[#2d2d2d] text-gray-400 py-12">
      <div className="container" ref={footerRef}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} ref={el => { colRefs.current[i] = el; }}>
              {i === 0 && (
                <>
                  <h3 className="text-2xl font-bold text-white mb-4">Everest</h3>
                  <p className="text-sm">
                    Service Delivery Automation for MSPs - Faster Resolution, Higher
                    CSAT, Better Margin.
                  </p>
                </>
              )}
              {i === 1 && (
                <>
                  <h4 className="font-semibold text-white mb-4">Product</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/#features"
                        className="text-sm hover:text-white transition-colors"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#integration"
                        className="text-sm hover:text-white transition-colors"
                      >
                        Integrations
                      </Link>
                    </li>
                  </ul>
                </>
              )}
              {i === 2 && (
                <>
                  <h4 className="font-semibold text-white mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog"
                        className="text-sm hover:text-white transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/support"
                        className="text-sm hover:text-white transition-colors"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </>
              )}
              {i === 3 && (
                <>
                  <h4 className="font-semibold text-white mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/about"
                        className="text-sm hover:text-white transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy"
                        className="text-sm hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-sm hover:text-white transition-colors"
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Everest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;