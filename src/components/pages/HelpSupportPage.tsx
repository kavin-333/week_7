import { Mail, Phone, MessageCircle, FileText, Video, Search, ExternalLink } from 'lucide-react';

export function HelpSupportPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@adminpro.com',
      action: 'Send Email',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our team (Mon-Fri, 9AM-5PM)',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '#',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '#',
    },
    {
      icon: Search,
      title: 'Knowledge Base',
      description: 'Search our extensive knowledge base',
      link: '#',
    },
  ];

  const faqs = [
    {
      question: 'How do I add new users to the dashboard?',
      answer: 'Click the "Create New User" button on the dashboard or Users page, fill in the required information (name, email, phone, role), and click "Create User".',
    },
    {
      question: 'How do I manage user permissions?',
      answer: 'User permissions are controlled through the Role field. Admins have full access, Editors can modify content, and Users have limited viewing permissions.',
    },
    {
      question: 'Can I export user data?',
      answer: 'Yes, you can export user data from the Users page. Click on the export button in the top-right corner and select your preferred format (CSV or Excel).',
    },
    {
      question: 'How do I customize the dashboard?',
      answer: 'Go to Settings to customize your dashboard layout, theme, and preferences. You can rearrange widgets and choose which statistics to display.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security practices to protect your data. All data is encrypted in transit and at rest.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8">
        <h2 className="text-slate-900 mb-2">Help & Support</h2>
        <p className="text-slate-600">
          Get the help you need to make the most of AdminPro Dashboard
        </p>
      </div>

      {/* Contact Methods */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-6">Contact Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                <method.icon className="w-6 h-6" />
              </div>
              <h4 className="text-slate-900 mb-2">{method.title}</h4>
              <p className="text-slate-600 text-sm mb-3">{method.description}</p>
              <p className="text-slate-900 text-sm mb-4">{method.contact}</p>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                {method.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-6">Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                <resource.icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-slate-900 text-sm mb-1 flex items-center gap-2">
                  {resource.title}
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </h4>
                <p className="text-slate-600 text-sm">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 last:border-0 pb-4 last:pb-0">
              <h4 className="text-slate-900 mb-2">{faq.question}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-4">System Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 text-sm">Dashboard Services</span>
            <span className="flex items-center gap-2 text-green-600 text-sm">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 text-sm">API Services</span>
            <span className="flex items-center gap-2 text-green-600 text-sm">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 text-sm">Database</span>
            <span className="flex items-center gap-2 text-green-600 text-sm">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
