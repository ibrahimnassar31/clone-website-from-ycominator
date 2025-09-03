import Image from "next/image";

const integrationPartners = [
  "NinjaOne",
  "Autotask",
  "ServiceNow",
  "Kaseya",
  "N-able",
  "Datto",
];

const IntegrationsSection = () => {
  return (
    <section id="integration" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Works With Your Existing Tools
          </h2>
          <p className="text-xl text-medium-gray">
            Everest integrates seamlessly with the PSA and RMM tools you already rely on, with no complex migration or downtime.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                Simple Integration, Powerful Results
              </h3>
              <p className="text-lg text-medium-gray mb-4">
                Everest connects to your existing systems through secure APIs, becoming an invisible extension of your workflow. Setup takes hours, not weeks.
              </p>
              <p className="font-medium text-medium-gray mb-4 mt-6">
                Compatible with:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {integrationPartners.map((partner) => (
                  <div 
                    key={partner} 
                    className="border border-border p-3 rounded-md text-center text-medium-gray font-medium hover:shadow-md transition-all"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <Image
                src="https://everestmanagedai.com/lovable-uploads/2f277a7a-c6cd-46fb-8ab8-aba05c68c65c.png"
                alt="Everest Integration Diagram"
                width={500}
                height={380}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;