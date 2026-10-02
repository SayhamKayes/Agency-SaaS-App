import React, { useState } from 'react';
import { useApp } from '../../Context/AppContext';
import {
  X,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Instagram,
  Globe,
  Sparkles
} from 'lucide-react';

export const ContactOmnichannelModal = () => {
  const {
    isContactModalOpen,
    setIsContactModalOpen,
    contactChannel,
    setContactChannel,
    addMessage
  } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Enterprise SaaS Partnership / New Project',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isContactModalOpen) return null;

  const channels = [
    { id: 'email', label: 'Email Desk', icon: Mail, color: '#F05A28' },
    { id: 'whatsapp', label: 'WhatsApp Direct', icon: MessageCircle, color: '#25D366' },
    { id: 'messenger', label: 'Messenger', icon: MessageCircle, color: '#0084FF' },
    { id: 'instagram', label: 'Instagram DM', icon: Instagram, color: '#E1306C' },
    { id: 'web', label: 'Web Terminal', icon: Globe, color: '#00A8C6' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Save to AppContext & LocalStorage
    addMessage({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      channel: contactChannel,
      subject: formData.subject,
      message: formData.message
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsContactModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Enterprise SaaS Partnership / New Project',
        message: ''
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-1">
              <span>OMNICHANNEL CONTACT DESK</span>
              <span>·</span>
              <span>DIRECT DISPATCH</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Connect with the SKz LAB Foundry
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Select your preferred channel. Every inquiry routes straight to our engineering leads.
            </p>
          </div>

          <button
            onClick={() => setIsContactModalOpen(false)}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Omnichannel Selector Pills */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
            Select Routing Channel
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {channels.map((ch) => {
              const Icon = ch.icon;
              const isSelected = contactChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setContactChannel(ch.id)}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-neutral-800 border-orange-500/80 text-white shadow-lg shadow-orange-500/10'
                      : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                  }`}
                >
                  <Icon className="w-4 h-4" style={{ color: ch.color }} />
                  <span className="text-[11px] truncate w-full text-center">{ch.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Channel Indicator Hint */}
        <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex items-center gap-3 text-xs">
          <span className="p-1.5 rounded-lg bg-orange-500/10 text-orange-400">
            <Sparkles className="w-4 h-4" />
          </span>
          <div className="text-neutral-300">
            {contactChannel === 'whatsapp' && (
              <span>Inquiry will be synchronized to our WhatsApp Business API and Admin Console.</span>
            )}
            {contactChannel === 'email' && (
              <span>Direct encrypted dispatch to founders@skzlab.com with guaranteed &lt; 2hr reply.</span>
            )}
            {contactChannel === 'messenger' && (
              <span>Routes through our automated Facebook Messenger webhook pipeline.</span>
            )}
            {contactChannel === 'instagram' && (
              <span>Synced directly with our official Instagram developer verified account.</span>
            )}
            {contactChannel === 'web' && (
              <span>Instant socket connection into our Studio Admin live dashboard.</span>
            )}
          </div>
        </div>

        {/* Submission State Message */}
        {isSubmitted ? (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-base font-bold text-white">Inquiry Dispatched Successfully!</h4>
            <p className="text-xs text-neutral-300">
              Your inquiry has been recorded in the SKz LAB Admin Portal under the {contactChannel.toUpperCase()} queue. An engineering lead will review it promptly.
            </p>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Sayham Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="sayham@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="+880 1700 000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Company / Venture Name</label>
                <input
                  type="text"
                  placeholder="Apex Digital"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-400">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-400">Project Architectural Requirements *</label>
              <textarea
                required
                rows={3}
                placeholder="Describe your SaaS product requirements, target scale, timeline, or integration questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg shadow-lg shadow-orange-950/50 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Dispatch via {contactChannel.toUpperCase()}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
