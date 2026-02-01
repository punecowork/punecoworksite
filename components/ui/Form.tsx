'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input, Textarea, Select } from './Input';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  source?: string;
}

export function ContactForm({ onSubmit, source = 'website' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const businessTypes = [
    { value: 'startup', label: 'Startup' },
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'small-business', label: 'Small Business' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'consultant', label: 'Consultant' },
    { value: 'other', label: 'Other' },
  ];

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
      newErrors.phone = 'Invalid Indian phone number';
    }
    
    if (!formData.businessType) {
      newErrors.businessType = 'Business type is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, source }),
        });
        
        if (!response.ok) throw new Error('Submission failed');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
      });
      
      // Redirect to thank you page after 1 second
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your full name"
        required
      />
      
      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="you@example.com"
        required
      />
      
      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="+91 98765 43210"
        required
      />
      
      <Select
        label="Business Type"
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
        error={errors.businessType}
        options={businessTypes}
        required
      />
      
      <Textarea
        label="Message (Optional)"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your requirements..."
      />
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Get Started - Book Free Consultation'}
      </Button>
      
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✓ Thank you! We'll contact you within 24 hours.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          × Submission failed. Please try WhatsApp or call us directly.
        </div>
      )}
      
      <p className="text-sm text-gray-500 text-center">
        By submitting, you agree to receive updates via WhatsApp/Email. No spam, unsubscribe anytime.
      </p>
    </form>
  );
}
