import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Scale Your MSP?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See how Everest can help you support more clients without adding headcount. Schedule a personalized walkthrough with our team.
          </p>
        </div>
        <div>
          <a href="https://calendly.com/yolandaycao/intro" target="_blank" rel="noopener noreferrer">
            <Button className="h-auto text-lg font-semibold px-8 py-3 transition-transform hover:-translate-y-1">
              Book a Demo
            </Button>
          </a>
        </div>
        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-4 font-semibold">
            Subscribe to newsletter for a free trial
          </p>
          <form className="flex justify-center items-center gap-2 max-w-md mx-auto">
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