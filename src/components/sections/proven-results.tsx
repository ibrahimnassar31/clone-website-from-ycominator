import React from 'react';
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
  return (
    <section id="results" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary md:text-4xl mb-4">
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