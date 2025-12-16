import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigate: () => void;
}

export function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mb-8 text-indigo-100 max-w-2xl mx-auto text-lg">
            Join thousands of teams already using our dashboard to streamline their operations and boost productivity
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onNavigate}
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onNavigate}
              className="px-8 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors flex items-center gap-2 border border-indigo-500"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}