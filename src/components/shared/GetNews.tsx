"use client"
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaFacebookF, FaDribbble, FaLinkedinIn } from 'react-icons/fa'

export default function GetNews() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full border border-gray-800 opacity-20"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full border border-gray-800 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider mb-2">Get Latest Updates</p>
          <h2 className="text-4xl font-bold">Subscribe For Newsletter</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-4 mb-16">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo@example.com"
            className="flex-grow bg-gray-800 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded-full py-3 px-8 font-semibold transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-gray-800 rounded-full p-2">
              <FaPhone className="w-5 h-5" />
            </div>
            <span>0123456789</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-800 rounded-full p-2">
              <FaEnvelope className="w-5 h-5" />
            </div>
            <span>demo@example.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition duration-300">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition duration-300">
              <FaDribbble className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition duration-300">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}