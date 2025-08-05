import React, { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Name and email are required fields.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Message: ${formData.message}

---
This message was sent from the EliteEye Consulting contact form.
      `;

      const mailtoLink = `mailto:contact@eliteeyeconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#165229]/5 via-white to-[#cb5d21]/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-4xl text-[#165229] mb-6">
              <br></br>Get in <span className="text-[#cb5d21]">Touch</span>
            </h1>
            <p className="text-xl text-[#165229]/70 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss how EliteEye can help you see beyond the obvious and build something extraordinary.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl text-[#165229] mb-4">
                  Let's Start a <span className="text-[#cb5d21]">Conversation</span>
                </h2>
                <p className="text-[#165229]/70 mb-8 leading-relaxed">
                  Whether you're looking to hire the right talent, launch a new initiative, or elevate your leadership, we're here to help you succeed.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#165229]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#165229]">Email</h3>
                      <p className="text-[#165229]/70">contact@eliteeyeconsulting.com</p>
                    </div>
                  </div>
                  <br></br>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#165229]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#165229]">Location</h3>
                      <p className="text-[#165229]/70">Bnegaluru, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 border border-[#165229]/10 shadow-lg">
                
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Thank you! Your message has been sent. We'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#165229] mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#165229]/20 rounded-lg focus:ring-2 focus:ring-[#cb5d21]/20 focus:border-[#cb5d21] transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#165229] mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#165229]/20 rounded-lg focus:ring-2 focus:ring-[#cb5d21]/20 focus:border-[#cb5d21] transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#165229] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#165229]/20 rounded-lg focus:ring-2 focus:ring-[#cb5d21]/20 focus:border-[#cb5d21] transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#165229] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-[#165229]/20 rounded-lg focus:ring-2 focus:ring-[#cb5d21]/20 focus:border-[#cb5d21] transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project, challenges, or how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#165229] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 