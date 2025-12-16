import { LayoutDashboard, Palette, Smartphone, Code } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Intuitive Interface',
    description: 'Navigate through your dashboard effortlessly with our clean and organized sidebar navigation.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Modern, professional UI that impresses your team and clients with pixel-perfect design.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Access your dashboard anywhere, anytime. Fully responsive on all devices and screen sizes.',
  },
  {
    icon: Code,
    title: 'Easy Integration',
    description: 'Seamlessly connect with your existing tools and workflows with our flexible API.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Why Choose Our Dashboard
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Built with modern technology and designed for efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}