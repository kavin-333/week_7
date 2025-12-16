import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started with the dashboard?',
    answer: 'Simply sign up for a free account, and you\'ll have instant access to the dashboard. You can start adding users, viewing analytics, and exploring all features immediately.',
  },
  {
    question: 'Can I customize the dashboard to fit my needs?',
    answer: 'Absolutely! The dashboard is highly customizable. You can personalize the layout, choose which widgets to display, and configure settings to match your workflow.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, security is our top priority. We use industry-standard encryption, secure authentication, and regular backups to ensure your data is always protected.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export your data in multiple formats including CSV, Excel, and PDF. Use the export functionality available in each section of the dashboard.',
  },
  {
    question: 'Does the dashboard work on mobile devices?',
    answer: 'The dashboard is fully responsive and works seamlessly on all devices including smartphones and tablets. Access your data on the go with our mobile-optimized interface.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support including detailed documentation, video tutorials, email support, and live chat during business hours.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Find answers to common questions about our dashboard
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}