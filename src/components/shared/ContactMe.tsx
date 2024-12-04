"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="min-h-screen bg-[#0a0a1f] py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a35] p-8 rounded-3xl"
          >
            <div className="mb-8">
              <p className="text-cyan-500 mb-2 tracking-wider">GET IN TOUCH</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white">Contact.</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="What's your good name?"
                  className="w-full px-4 py-3 rounded-lg bg-[#151030] text-white border border-[#2a2a4a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white mb-2 block">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="What's your web address?"
                  className="w-full px-4 py-3 rounded-lg bg-[#151030] text-white border border-[#2a2a4a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white mb-2 block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What you want to say?"
                  className="w-full px-4 py-3 rounded-lg bg-[#151030] text-white border border-[#2a2a4a] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium"
                type="submit"
              >
                Send
              </motion.button>
            </form>
          </motion.div>

          {/* 3D Sphere */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="3D Sphere"
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}