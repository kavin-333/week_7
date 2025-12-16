import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: () => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">All-in-One Solution</span>
          </div>
          
          <h1 className="text-slate-900 max-w-4xl mx-auto">
            Modern Admin Dashboard
            <span className="block text-indigo-600">Manage Everything in One Place</span>
          </h1>
          
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Streamline your business operations with our powerful admin dashboard. Monitor analytics, manage users, track revenue, and make data-driven decisions with ease.
          </p>
          
          <div className="flex items-center justify-center pt-4">
            <button 
              onClick={onNavigate}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}