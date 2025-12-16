import { BarChart3, Table, CreditCard, UserPlus, Search, Settings } from 'lucide-react';

const sections = [
  {
    icon: BarChart3,
    title: 'Analytics Overview',
    description: 'Track key metrics like total users, revenue, sales, and growth trends at a glance.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Table,
    title: 'User Management',
    description: 'View, edit, and manage all users with powerful search and filtering capabilities.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Find any data instantly with our intelligent search and filter system.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: UserPlus,
    title: 'Quick Actions',
    description: 'Create new users, products, or content with simple modal-based workflows.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    description: 'Monitor transactions, invoices, and revenue streams in real-time.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Settings,
    title: 'Settings & Config',
    description: 'Customize your dashboard preferences and manage system configurations.',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export function ProjectSections() {
  return (
    <section id="sections" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Dashboard Sections
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your business effectively
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <section.icon className="w-6 h-6" />
              </div>
              <h3 className="text-slate-900 mb-2">{section.title}</h3>
              <p className="text-slate-600 text-sm">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}