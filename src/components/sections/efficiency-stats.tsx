import React from 'react';

const EfficiencyStats = () => {
  return (
    <div className="bg-secondary p-8 rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Maximize L1 Support Efficiency
          </h3>
          <p className="text-lg text-muted-foreground mb-4">
            The average L1 technician can handle 80% more tickets with Everest's automation. Our platform helps your first-line support team work more efficiently, enabling you to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Automate routine L1 support tasks</li>
            <li>Reduce L1 resolution time by up to 80%</li>
            <li>Improve L1 technician productivity</li>
            <li>Free up senior techs for complex issues</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 bg-card p-6 rounded-lg shadow-sm">
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