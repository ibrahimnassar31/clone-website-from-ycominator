'use client'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Award, Shield, Users, Zap } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

const statsData: Stat[] = [
  {
    icon: Shield,
    value: '99%',
    label: 'Uptime SLA',
  },
  {
    icon: Users,
    value: 'TOP 500',
    label: 'MSP partners',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support',
  },
  {
    icon: Award,
    value: 'SOC 2',
    label: 'Compliant',
  },
];

interface StatCardProps extends Stat {
  direction: 'left' | 'right';
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, direction }) => (
  <motion.div
    className="group text-center transition-all duration-300 hover:scale-105"
    initial={{ opacity: 0, x: direction === 'left' ? -80 : 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
  >
    <motion.div
      initial={{ scale: 0.8, rotate: direction === 'left' ? -8 : 8 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 transition-all group-hover:from-primary/20 group-hover:to-primary/10"
    >
      <div className="text-primary">
        <Icon className="h-8 w-8" />
      </div>
    </motion.div>
    <div className="mb-1 text-2xl font-bold text-primary">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </motion.div>
);

const TrustIndicators = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[.03] via-transparent to-transparent"
      ></motion.div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Trusted by Leading MSPs</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Join top MSPs who trust Everest to automate their service delivery
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustIndicators;