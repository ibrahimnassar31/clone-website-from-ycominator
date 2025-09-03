'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const featuredArticle = {
  image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5ee1cd3-801e-4a8d-9689-89460ae3ba96-everestmanagedai-com/assets/images/c9320fa8-104d-40ff-8fa3-6d5d28c09dd6-1.png?',
  category: 'AI & Automation',
  date: 'Dec 15, 2024',
  readTime: '5 min read',
  title: '5 Ways AI is Transforming MSP Operations',
  description: 'Discover how artificial intelligence is revolutionizing managed service providers\' daily operations and client delivery.',
  author: 'Sarah Chen',
  href: 'https://everestmanagedai.com/blog/ai-transforming-msp-operations',
};

const otherArticles = [
  {
    image: '', // Asset not provided in the inputs
    category: 'MSP Growth',
    date: 'Dec 12, 2024',
    title: 'Scaling Your MSP Without Adding Headcount',
    description: 'Learn proven strategies to grow your MSP business efficiently using automation and smart processes.',
    readTime: '7 min read',
    href: '#',
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5ee1cd3-801e-4a8d-9689-89460ae3ba96-everestmanagedai-com/assets/images/e5934ef9-eecf-48b1-8a74-a62b9d0861f3-4.png?',
    category: 'Support Automation',
    date: 'Dec 10, 2024',
    title: 'The Future of L1 Support Automation',
    description: 'Explore how intelligent automation is reshaping Level 1 support and what it means for MSPs.',
    readTime: '6 min read',
    href: '#',
  },
];

export default function BlogInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const featuredRef = useRef<HTMLAnchorElement>(null);
  const otherRefs = useRef<Array<HTMLAnchorElement | null>>([]);

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
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    otherRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.15,
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
    <section ref={sectionRef} className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-4 font-semibold px-2.5 py-0.5 text-xs">
            Latest Insights
          </Badge>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-primary mb-4">MSP Automation Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with the latest trends, strategies, and insights in MSP automation and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Link ref={featuredRef} href={featuredArticle.href} className="lg:col-span-2 group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card">
            <div className="relative">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={779}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-primary-blue text-white border-transparent font-semibold text-xs px-2.5 py-0.5">
                Featured
              </Badge>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 gap-x-4 gap-y-2">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100/90 ring-1 ring-inset ring-blue-700/10 text-xs font-medium px-2 py-1">
                  {featuredArticle.category}
                </Badge>
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  {featuredArticle.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-blue transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {featuredArticle.description}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 bg-slate-200 flex items-center justify-center text-slate-500 font-semibold">
                  SC
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{featuredArticle.author}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          <div className="space-y-8">
            {otherArticles.map((article, index) => (
              <a
                ref={el => { otherRefs.current[index] = el; }}
                href={article.href}
                key={index}
                className="group block bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={96}
                        height={96}
                        className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-slate-200 rounded-md flex-shrink-0"></div>
                    )}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center text-xs text-muted-foreground mb-2 gap-2">
                        <Badge className={`font-medium px-2 py-1 text-xs ${index === 0 ? 'bg-green-100 text-green-700 ring-1 ring-inset ring-green-600/20' : 'bg-purple-100 text-purple-700 ring-1 ring-inset ring-purple-600/20'}`}>
                          {article.category}
                        </Badge>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-primary my-2 group-hover:text-primary-blue transition-colors leading-tight">
                        {article.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {article.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{article.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="bg-card hover:bg-slate-100 text-primary border-slate-300 px-6 font-semibold text-base h-auto py-2">
            <Link href="https://everestmanagedai.com/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}