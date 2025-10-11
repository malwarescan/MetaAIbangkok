import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, ArrowLeft, CheckCircle } from 'lucide-react';
export function AppointmentForm({
  onBack
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    concerns: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log('Appointment data:', formData);
    setSubmitted(true);
  };
  const handleNext = () => {
    setStep(2);
  };
  const handlePrev = () => {
    setStep(1);
  };
  // Available time slots
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  if (submitted) {
    return <div className="p-8 flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Appointment Confirmed!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Your appointment has been scheduled for {formData.date} at{' '}
          {formData.time}. We've sent a confirmation email to {formData.email}.
        </p>
        <button onClick={onBack} className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full">
          Return to Chat
        </button>
      </div>;
  }
  return <div className="p-6 h-[600px] overflow-y-auto">
      <button onClick={onBack} className="flex items-center text-gray-600 hover:text-pink-500 mb-6">
        <ArrowLeft size={16} className="mr-1" /> Back to chat
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Schedule Your Appointment
      </h2>
      <div className="mb-6">
        <div className="flex mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'} mr-2`}>
            1
          </div>
          <div className={`h-0.5 flex-grow my-auto ${step >= 2 ? 'bg-pink-500' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'} ml-2`}>
            2
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span className={step >= 1 ? 'text-pink-500 font-medium' : 'text-gray-500'}>
            Personal Details
          </span>
          <span className={step >= 2 ? 'text-pink-500 font-medium' : 'text-gray-500'}>
            Select Time & Date
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 ? <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" placeholder="Enter your full name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" placeholder="Enter your phone number" />
            </div>
            <div>
              <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">
                Health Concerns
              </label>
              <textarea id="concerns" name="concerns" value={formData.concerns} onChange={handleChange} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" placeholder="Describe your symptoms or concerns" />
            </div>
            <div className="pt-4">
              <button type="button" onClick={handleNext} disabled={!formData.name || !formData.email || !formData.phone} className={`w-full py-3 rounded-lg font-medium ${!formData.name || !formData.email || !formData.phone ? 'bg-gray-200 text-gray-500' : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'}`}>
                Next Step
              </button>
            </div>
          </div> : <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon size={18} className="text-gray-400" />
                </div>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => <button key={time} type="button" onClick={() => setFormData({
              ...formData,
              time
            })} className={`flex items-center justify-center px-3 py-2 border rounded-lg ${formData.time === time ? 'bg-pink-100 border-pink-300 text-pink-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                    <ClockIcon size={14} className="mr-1" />
                    {time}
                  </button>)}
              </div>
            </div>
            <div className="flex space-x-3 pt-4">
              <button type="button" onClick={handlePrev} className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
                Back
              </button>
              <button type="submit" disabled={!formData.date || !formData.time} className={`flex-1 py-3 rounded-lg font-medium ${!formData.date || !formData.time ? 'bg-gray-200 text-gray-500' : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'}`}>
                Confirm Appointment
              </button>
            </div>
          </div>}
      </form>
    </div>;
}