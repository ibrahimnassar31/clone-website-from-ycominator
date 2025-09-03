import React from 'react';
import { FileText, FileCheck, ClipboardCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureData: FeatureCardProps[] = [
  {
    icon: <FileText size={32} className="text-primary-navy" />,
    title: "L1 Ticket Automation",
    description: "Everest automates routine L1 support tasks, enabling your first-line technicians to handle more tickets efficiently while maintaining high service quality.",
  },
  {
    icon: <FileCheck size={32} className="text-primary-navy" />,
    title: "L1 Decision Support",
    description: "Our platform guides L1 technicians through proven troubleshooting steps, helping them make better decisions and resolve issues faster.",
  },
  {
    icon: <ClipboardCheck size={32} className="text-primary-navy" />,
    title: "L1 Process Automation",
    description: "Automate repetitive L1 tasks and standard procedures, allowing your first-line support to handle higher ticket volumes without compromising quality.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-dark-navy">{title}</h3>
    <p className="text-medium-gray">{description}</p>
  </div>
);

const L1TechniciansSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Empower Your L1 Technicians
          </h2>
          <p className="text-xl text-medium-gray">
            Everest transforms your L1 support team through intelligent automation, enabling them to handle more tickets while maintaining high service quality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default L1TechniciansSection;