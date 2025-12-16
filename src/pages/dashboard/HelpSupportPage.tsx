import { HelpCircle, Mail, MessageCircle, Book, Phone, ExternalLink } from 'lucide-react';

export function HelpSupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">Help & Support</h2>
        <p className="text-slate-600">Get assistance and find answers to your questions</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all text-left">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-slate-900 mb-2">Email Support</h3>
          <p className="text-slate-600 text-sm mb-3">Get help via email within 24 hours</p>
          <span className="text-indigo-600 text-sm inline-flex items-center gap-1">
            Contact us <ExternalLink className="w-4 h-4" />
          </span>
        </button>

        <button className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all text-left">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-slate-900 mb-2">Live Chat</h3>
          <p className="text-slate-600 text-sm mb-3">Chat with our support team now</p>
          <span className="text-indigo-600 text-sm inline-flex items-center gap-1">
            Start chat <ExternalLink className="w-4 h-4" />
          </span>
        </button>

        <button className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all text-left">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-slate-900 mb-2">Phone Support</h3>
          <p className="text-slate-600 text-sm mb-3">Call us Mon-Fri, 9am-5pm EST</p>
          <span className="text-indigo-600 text-sm inline-flex items-center gap-1">
            +1 (555) 123-4567 <ExternalLink className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Knowledge Base */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
            <Book className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900">Knowledge Base</h3>
            <p className="text-slate-600 text-sm">Browse articles and guides</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
            <h4 className="text-slate-900 mb-1">Getting Started</h4>
            <p className="text-slate-600 text-sm">Learn the basics of AdminPro</p>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
            <h4 className="text-slate-900 mb-1">User Management</h4>
            <p className="text-slate-600 text-sm">How to add and manage users</p>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
            <h4 className="text-slate-900 mb-1">Payment Setup</h4>
            <p className="text-slate-600 text-sm">Configure payment options</p>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
            <h4 className="text-slate-900 mb-1">Analytics Guide</h4>
            <p className="text-slate-600 text-sm">Understanding your data</p>
          </button>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900">Frequently Asked Questions</h3>
            <p className="text-slate-600 text-sm">Quick answers to common questions</p>
          </div>
        </div>
        <div className="space-y-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <span className="text-slate-900">How do I create a new user?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 px-4 text-slate-600 text-sm">
              Navigate to the Users section and click the "Create New User" button. Fill in the required information and click "Create User" to add them to your dashboard.
            </p>
          </details>
          
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <span className="text-slate-900">How do I track payments?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 px-4 text-slate-600 text-sm">
              Go to the Payments section to view all transactions. You can create new payments by clicking "Create Payment" and selecting a user from your user list.
            </p>
          </details>
          
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <span className="text-slate-900">Is my data stored securely?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 px-4 text-slate-600 text-sm">
              Currently, all data is stored locally in your browser using localStorage. For production use with secure cloud storage, we recommend integrating with a backend service like Supabase.
            </p>
          </details>
          
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <span className="text-slate-900">Can I export my data?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 px-4 text-slate-600 text-sm">
              Data export functionality is coming soon. You'll be able to export your users and payment data in CSV or JSON format.
            </p>
          </details>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-2">Still need help?</h3>
        <p className="text-slate-600 text-sm mb-6">Send us a message and we'll get back to you as soon as possible.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-slate-700 text-sm mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="What do you need help with?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-slate-700 text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Describe your issue or question..."
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
